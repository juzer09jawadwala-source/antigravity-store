"use client";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, Copy } from "lucide-react";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";

function SuccessContent() {
  const [step, setStep] = useState(0);
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id") || "PENDING";
  const { selectedModel: model, storage, selectedColor: color } = useCartStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((s) => (s < 3 ? s + 1 : 3));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const merchantPhone = process.env.NEXT_PUBLIC_MERCHANT_WHATSAPP || "919999999999";
  const whatsappText = `Hi! I just reserved my ${model} (${storage}, ${color}). My Order ID is ${orderId}. Please confirm my shipment from Dubai.`;
  const whatsappUrl = `https://wa.me/${merchantPhone}?text=${encodeURIComponent(whatsappText)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`Order: ${orderId} | Item: ${model} (${storage}, ${color})`);
    alert("Order details copied to clipboard!");
  };

  const steps = [
    "Payment Verified securely",
    "Customs Clearance Initiated...",
    "Preparing for Dispatch from Dubai",
    "Ready for VIP Concierge Handover"
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 font-[family-name:var(--font-geist-sans)] pb-24">
      <motion.div 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 mt-12"
      >
        <CheckCircle className="w-12 h-12 text-emerald-400" />
      </motion.div>
      
      <h1 className="text-3xl font-bold text-white mb-2 text-center">Reservation Secured</h1>
      <p className="text-slate-400 mb-8 text-center">Order ID: {orderId}</p>

      <div className="space-y-4 w-full max-w-md mb-12">
        {steps.map((text, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: step >= i ? 1 : 0.2, x: 0 }}
            className={`p-4 border rounded-xl flex items-center gap-4 ${step >= i ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400' : 'border-white/10 bg-white/5 text-slate-500'}`}
          >
            <div className={`w-3 h-3 rounded-full ${step >= i ? 'bg-emerald-400' : 'bg-slate-600'} ${step === i ? 'animate-pulse' : ''}`} />
            {text}
          </motion.div>
        ))}
      </div>

      {/* VIP Concierge Bridge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: step === 3 ? 1 : 0, y: step === 3 ? 0 : 20 }} 
        className="w-full max-w-md space-y-4"
      >
        <div className="p-6 border border-[#00D4FF]/30 bg-[#00D4FF]/5 rounded-2xl text-center">
          <h3 className="text-white font-bold text-lg mb-2">Connect with Your Dubai Concierge</h3>
          <p className="text-slate-400 text-sm mb-6">Your dedicated agent is ready to confirm your shipping details and provide live tracking.</p>
          
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button className="w-full h-12 mb-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold">
              <MessageCircle className="w-5 h-5 mr-2" />
              Open WhatsApp
            </Button>
          </a>
          
          <Button onClick={handleCopy} variant="outline" className="w-full h-12 border-white/20 text-white hover:bg-white/10">
            <Copy className="w-4 h-4 mr-2" />
            Copy Order Details
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
