"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToEngine = () => {
    document.getElementById("product-showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pb-24 overflow-hidden bg-[#050505]">
      {/* Desktop Hero Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
      >
        {/* No gradient overlays at all so the image text is perfectly bright */}
      </div>

      {/* Mobile Hero Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat block md:hidden"
        style={{ backgroundImage: "url('/Smartphone_against_metallic_letters_20260927212333.webp')" }}
      >
        {/* Mobile specific background image */}
      </div>

      <div className="relative z-10 w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToEngine}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full text-lg font-bold overflow-hidden transition-all hover:bg-slate-100"
          >
            <span>Explore the Lineup</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
