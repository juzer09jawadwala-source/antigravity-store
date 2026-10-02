import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { supabase } from '@/lib/supabase/client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      customerDetails 
    } = body;

    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) throw new Error("Razorpay secret is missing");

    // 1. Verify Signature
    const generated_signature = crypto
      .createHmac('sha256', secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest('hex');

    if (generated_signature !== razorpay_signature) {
      return NextResponse.json({ success: false, error: "Invalid signature" }, { status: 400 });
    }

    // 2. Save Confirmed Order to Supabase Database
    const { error: dbError } = await supabase.from('orders').insert({
      razorpay_order_id: razorpay_order_id,
      razorpay_payment_id: razorpay_payment_id,
      customer_name: "VIP Customer", // Captured from future checkout form
      model_snapshot: customerDetails.model,
      storage_snapshot: customerDetails.storage,
      color_snapshot: customerDetails.color,
      reservation_amount: 5000,
      total_price_inr: customerDetails.finalPriceInr || 0,
      status: 'Reserved'
    });

    if (dbError) {
      console.error("Failed to save order to Supabase:", dbError);
    }

    // 3. MERCHANT ALERT NOTIFICATION (Discord / Telegram Webhook)
    const webhookUrl = process.env.ORDER_ALERT_WEBHOOK_URL;
    if (webhookUrl && !webhookUrl.includes("your_webhook_here")) {
      const message = {
        content: `🚨 **NEW VIP ARBITRAGE RESERVATION** 🚨\n\n**Order ID:** \`${razorpay_order_id}\`\n**Payment ID:** \`${razorpay_payment_id}\`\n**Item:** ${customerDetails.model} (${customerDetails.storage}, ${customerDetails.color})\n**Amount Paid:** ₹5,000 (Reservation Block)\n**Time:** ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`
      };
      
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message)
      }).catch(err => console.error("Webhook alert failed", err));
    }

    return NextResponse.json({ success: true, message: "Payment verified successfully" });
  } catch (error) {
    console.error("Verification Error:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
