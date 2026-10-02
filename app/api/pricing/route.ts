import { NextResponse } from 'next/server';
import { createClient } from '@/lib/server';

export async function GET() {
  try {
    const supabase = await createClient();
    // Fetch live settings directly from your new Supabase table
    const { data, error } = await supabase.from('settings').select('*').eq('id', 1).single();
    
    if (error || !data) {
      console.error("Supabase fetch error:", error);
      throw new Error("Failed to fetch settings from DB");
    }

    return NextResponse.json({ 
      success: true, 
      rate: data.aed_to_inr_rate, 
      logisticsFee: data.logistics_fee_inr 
    });
  } catch {
    // Fallback static rates just in case DB is unreachable
    return NextResponse.json({ 
      success: true, 
      rate: 22.85, 
      logisticsFee: 5000 
    });
  }
}
