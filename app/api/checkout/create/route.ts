import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { model, storage } = body;

    // Hardcoded ₹5,000 reservation fee (500000 paise)
    const reservationAmount = 500000; 

    // FALLBACK: If user hasn't put real keys in yet, generate a dummy order so the app doesn't hang!
    if (!process.env.RAZORPAY_KEY_SECRET || process.env.RAZORPAY_KEY_SECRET.includes('placeholder')) {
      return NextResponse.json({ 
        success: true, 
        orderId: `order_dummy_${Date.now()}`, 
        amount: reservationAmount 
      });
    }

    // Safely initialize Razorpay ONLY if real keys exist
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const options = {
      amount: reservationAmount,
      currency: 'INR',
      receipt: `rcpt_${Math.floor(Math.random() * 10000)}`,
      notes: {
        model,
        storage,
        type: 'VIP Customs Reservation'
      }
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({ success: true, orderId: order.id, amount: order.amount });
  } catch (error) {
    console.error('Razorpay Error:', error);
    return NextResponse.json({ success: false, error: 'Payment initialization failed' }, { status: 500 });
  }
}
