import React from "react";

export default function VaporChamberSection() {
  return (
    <section className="w-full bg-[#050505] overflow-hidden py-24 md:py-32 flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-4 text-center mb-10 md:mb-16">
        <h2 className="text-[#f5f5f7] text-[48px] md:text-[68px] font-bold tracking-tighter leading-[1.05]">
          Bigger vapour chamber.<br />
          Let the heat drop.
        </h2>
      </div>

      <div className="w-full relative flex justify-center px-4 md:px-8">
        <img 
          loading="lazy" 
          decoding="async"
          src="/vapor-chamber-trans.webp" 
          alt="iPhone 18 Pro Vapor Chamber" 
          className="w-full max-w-[1280px] h-auto object-contain drop-shadow-2xl"
        />
      </div>

      <div className="max-w-[780px] mx-auto px-6 mt-12 md:mt-16 text-center">
        <p className="text-[#86868b] text-[17px] md:text-[21px] font-medium leading-[1.45] tracking-tight">
          The next-generation vapour chamber has three times the surface area to dissipate even more heat. Combined with more thermally conductive materials, it works with the A20 Pro chip design to deliver up to <strong className="text-[#f5f5f7] font-semibold">40% better sustained performance</strong> than iPhone 17 Pro. So you can push high-intensity gaming and run larger, more complex AI models on your device for longer.
        </p>
      </div>
    </section>
  );
}
