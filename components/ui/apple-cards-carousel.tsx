"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

export const Carousel = ({ items }: { items: React.ReactNode[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="relative w-full overflow-hidden">
      <div 
        ref={carouselRef}
        className="flex w-full overflow-x-scroll overscroll-x-auto py-10 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex flex-row justify-start gap-6 pl-4 md:pl-10 lg:pl-20 w-full pr-[10vw]">
          {items}
        </div>
      </div>
    </div>
  );
};

type CardData = { src: string; title: string; category: string; content?: React.ReactNode };
export const Card = ({ card, index }: { card: CardData; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative flex-shrink-0 w-[90vw] md:w-[1100px] lg:w-[1280px] h-[450px] md:h-[680px] lg:h-[720px] rounded-[32px] bg-[#000000] overflow-hidden group cursor-pointer border border-white/5"
    >
      <img loading="lazy" decoding="async" 
        src={card.src} 
        alt={card.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
      
      {/* Top-centered text exactly like the Apple website screenshot */}
      <div className="absolute top-0 inset-x-0 p-8 md:p-14 flex flex-col items-center justify-start text-center pointer-events-none z-10">
        {card.category && (
          <p className="text-white/80 text-sm font-semibold tracking-wide uppercase mb-2">{card.category}</p>
        )}
        <h3 className="text-[#f5f5f7] text-xl md:text-3xl font-medium leading-snug tracking-tight max-w-2xl" dangerouslySetInnerHTML={{ __html: card.title }} />
      </div>
    </motion.div>
  );
};
