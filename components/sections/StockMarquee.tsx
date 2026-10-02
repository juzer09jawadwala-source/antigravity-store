"use client";

import { motion } from "framer-motion";

export default function StockMarquee() {
  const text = "⚡ 42 Units Cleared Customs Today ⚡ 100% Genuine Apple Worldwide Warranty ⚡ Priority Dispatch in 24 Hours ";
  
  return (
    <div className="w-full bg-[#00D4FF]/10 border-y border-[#00D4FF]/20 overflow-hidden py-3">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap text-[#00D4FF] font-medium tracking-widest text-sm uppercase"
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20
          }}
        >
          <span>{text.repeat(10)}</span>
        </motion.div>
      </div>
    </div>
  );
}
