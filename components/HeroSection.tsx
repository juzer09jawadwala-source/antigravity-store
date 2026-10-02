"use client";

import { LiquidMetal } from "@/components/ui/liquid-metal";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* VengeanceUI Background */}
      <LiquidMetal
        className="absolute inset-0 opacity-60 mix-blend-screen"
        speed={0.4}
        intensity={0.9}
        color="#0A2463" 
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-medium text-slate-200">Live: 42 Units Cleared Indian Customs Today</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Dubai Exclusivity. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] to-[#FFD700]">
            Indian Doorstep.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl"
        >
          Skip the Indian tax premium. Get authentic, sealed Apple devices direct from Dubai with guaranteed customs clearance and worldwide warranty.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} size="lg" className="bg-[#00D4FF] text-black hover:bg-[#00b3d7] font-bold px-8 h-14 text-lg">
            View Live Dubai Stock <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 text-lg backdrop-blur-sm">
            <ShieldCheck className="mr-2 h-5 w-5 text-[#FFD700]" /> Verify Authenticity
          </Button>
        </motion.div>
      </div>
      
      {/* Bottom Gradient Fade to transition into the next section cleanly */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
