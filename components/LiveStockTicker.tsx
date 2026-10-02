"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap } from "lucide-react";

export default function LiveStockTicker() {
  const tickerItems = [
    { icon: <Zap className="h-4 w-4 text-[#FFD700]" />, text: "2x iPhone 15 Pro Max 256GB Natural Titanium just cleared Mumbai Customs" },
    { icon: <ShieldCheck className="h-4 w-4 text-emerald-400" />, text: "1x MacBook Pro M3 Max secured for Delhi delivery (COD Approved)" },
    { icon: <Zap className="h-4 w-4 text-[#FFD700]" />, text: "AED to INR rate dropped by 0.5% today — Lock in maximum arbitrage savings now!" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-[#050505]/90 backdrop-blur-xl border-t border-white/10 py-2.5 z-50 overflow-hidden flex items-center pb-20 md:pb-2.5">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {/* Render twice for seamless infinite looping */}
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center mx-8 text-sm font-medium text-slate-300">
            <span className="mr-2">{item.icon}</span>
            <span>{item.text}</span>
            <span className="mx-8 text-[#00D4FF] opacity-50">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
