"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../../store/useCartStore";
import { ChevronLeft, ChevronRight, Cpu, Battery, Camera } from "lucide-react";

const COLORS = [
  { name: "Burgundy", hex: "#5C1724" },
  { name: "Silver", hex: "#E2E4E5" },
  { name: "Glacier", hex: "#C2D3DE" },
  { name: "Black", hex: "#2E2E2E" },
];

export default function ProductShowcase() {
  const { selectedColor, setColor, storage, setStorage } = useCartStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const displayModel = "iPhone 18 Pro";
  const colorKey = selectedColor.toLowerCase();

  const currentImages = [
    `/${colorKey}/trans_18-pro-${colorKey}-full.webp`,
    `/${colorKey}/trans_18-pro-${colorKey}-close-up.webp`,
    `/${colorKey}/trans_18-pro-${colorKey}-side.webp`,
  ];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);

  return (
    <section id="product-showcase" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Explore iPhone 18 Pro</h2>
          <p className="text-slate-400">Discover the details of our most advanced Pro model.</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left: Product Image & Details */}
          <div className="lg:col-span-8 bg-[#f5f5f7]/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            <AnimatePresence mode="wait">
                <motion.div
                  key="carousel-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative flex items-center justify-center w-full h-[32rem] md:h-[40rem] mb-8 z-10 group"
                >
                  <AnimatePresence mode="wait">
                    <motion.img loading="lazy" decoding="async"
                      key={`${colorKey}-${currentImageIndex}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      src={currentImages[currentImageIndex]}
                      alt={`iPhone 18 Pro ${selectedColor}`}
                      className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                    />
                  </AnimatePresence>
                  
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 hover:scale-105 z-20"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 hover:scale-105 z-20"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {currentImages.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                      />
                    ))}
                  </div>
                </motion.div>
            </AnimatePresence>

            <h3 className="text-2xl font-semibold text-white z-10">{displayModel}</h3>
            <p className="text-slate-400 z-10">{storage} • {selectedColor}</p>
          </div>

          {/* Right: Variant Selector & Math */}
          <div className="lg:col-span-4 flex flex-col gap-10 lg:gap-12 pt-4">
            
            {/* Apple Clone: Model */}
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-4">
                Model. <span className="text-[#86868b]">Which is best for you?</span>
              </h4>
              <div className="flex flex-col gap-4">
                {/* Active Model Card */}
                <button className="flex justify-between items-start p-5 rounded-2xl border-2 border-[#0071e3] bg-white/5 transition-all text-left w-full">
                  <div className="flex flex-col gap-1">
                    <span className="text-[17px] font-semibold text-white">iPhone 18 Pro</span>
                    <span className="text-[12px] text-gray-400">15.9 cm (6.3&quot;) display¹</span>
                  </div>
                </button>
                {/* Inactive Model Card */}
                <button className="flex justify-between items-start p-5 rounded-2xl border border-white/20 hover:border-white/40 bg-transparent transition-all text-left w-full opacity-50 cursor-not-allowed">
                  <div className="flex flex-col gap-1">
                    <span className="text-[17px] font-medium text-white">iPhone 18 Pro Max</span>
                    <span className="text-[12px] text-gray-400">17.4 cm (6.9&quot;) display¹</span>
                  </div>
                </button>
                
                {/* Help Box */}
                <div className="mt-2 p-4 rounded-2xl bg-[#1d1d1f] flex justify-between items-center cursor-pointer hover:bg-[#333336] transition-colors">
                  <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-white">Need help choosing a model?</span>
                    <span className="text-[12px] text-gray-400">Explore the differences in screen size and battery life.</span>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 ml-2">
                    <span className="text-white text-xs">+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Apple Clone: Finish */}
            <div className="flex flex-col">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Finish. <span className="text-[#86868b]">Pick your favourite.</span>
              </h4>
              <p className="text-[15px] font-medium text-white mb-4">Colour - {selectedColor}</p>
              <div className="flex gap-5">
                {COLORS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => {
                      setColor(color.name);
                      setCurrentImageIndex(0); // Reset angle on color change
                    }}
                    className={`relative w-8 h-8 rounded-full transition-all focus:outline-none ${
                      selectedColor === color.name 
                        ? 'ring-2 ring-offset-2 ring-offset-[#050505] ring-[#0071e3]' 
                        : 'hover:ring-1 hover:ring-offset-2 hover:ring-offset-[#050505] hover:ring-white/50'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Apple Clone: Storage */}
            <div className="flex flex-col mb-4">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Storage. <span className="text-[#86868b]">How much space do you need?</span>
              </h4>
              <div className="flex flex-col gap-4">
                {['256GB', '512GB', '1TB'].map((gb) => (
                  <button
                    key={gb}
                    onClick={() => setStorage(gb)}
                    className={`flex justify-between items-center p-5 rounded-2xl transition-all text-left ${
                      storage === gb 
                        ? 'border-2 border-[#0071e3] bg-white/5' 
                        : 'border border-white/20 hover:border-white/40 bg-transparent'
                    }`}
                  >
                    <span className={`text-[17px] ${storage === gb ? 'font-semibold text-white' : 'font-medium text-white'}`}>
                      {gb}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Specifications Snapshot */}
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">A19 Pro Chip</h5>
                    <p className="text-sm text-slate-400">Industry-leading performance</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">Pro Camera System</h5>
                    <p className="text-sm text-slate-400">48MP Main | 5x Telephoto</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Battery className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">All-Day Battery Life</h5>
                    <p className="text-sm text-slate-400">Up to 29 hours video playback</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
