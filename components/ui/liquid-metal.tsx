"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface LiquidMetalProps {
  className?: string;
  speed?: number;
  intensity?: number;
  color?: string;
}

export function LiquidMetal({ className, speed = 0.5, intensity = 0.5, color = "#0A2463" }: LiquidMetalProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Implement the mobile viewport detection for performancefallback (Step 5 constraints)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check immediately
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div 
        className={cn("w-full h-full", className)}
        style={{ background: `radial-gradient(circle at center, ${color} 0%, #050505 100%)` }}
      />
    );
  }

  return (
    <motion.div
      className={cn("w-full h-full", className)}
      style={{
        background: `radial-gradient(circle at center, ${color} 0%, transparent 100%)`,
        filter: `blur(${100 * intensity}px)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 10 / speed,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
