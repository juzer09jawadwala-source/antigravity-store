import React from "react";

export default function AccessoriesSection() {
  return (
    <section id="accessories" className="w-full bg-[#000000] text-white pt-24 md:pt-36 pb-0 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Apple Eyebrow */}
        <p className="text-sm md:text-base font-semibold text-[#86868b] tracking-normal mb-3 md:mb-4">
          Accessories
        </p>

        {/* Apple Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-semibold tracking-tight text-[#f5f5f7] leading-[1.05] mb-5 md:mb-6 max-w-4xl">
          Addition by attraction.
        </h2>

        {/* Apple Body Text */}
        <p className="max-w-[640px] text-lg sm:text-xl md:text-[1.3rem] font-normal text-[#86868b] leading-relaxed mb-6 md:mb-7">
          Accessorise in a snap with a selection of MagSafe cases and wallets. And go hands-free with the new Wrist Strap or the Crossbody Strap in new colours.
        </p>

        {/* Apple CTA Link */}
        <div className="mb-10 md:mb-16">
          <a
            href="#order-summary"
            className="inline-flex items-center gap-1.5 text-[#2997ff] hover:text-[#70b4ff] text-base md:text-lg font-medium transition-colors group"
          >
            <span>Shop all iPhone accessories</span>
            <span className="text-xl leading-none transition-transform group-hover:translate-x-0.5">›</span>
          </a>
        </div>

        {/* Full Section Image with No Background */}
        <div className="relative w-full max-w-5xl mx-auto flex justify-center items-end">
          <img
            src="/accessories-trans.webp"
            alt="From left to right, iPhone 18 Pro in Burgundy leather case with Burgundy Crossbody strap, middle iPhone 18 Pro in Glacier with White MagSafe charger attached, right iPhone 18 Pro in Silver in green phone case, black leather wallet case with wrist strap."
            className="w-full h-auto max-h-[82vh] object-contain object-bottom pointer-events-none select-none"
            loading="lazy"
            decoding="async"
          />
        </div>

      </div>
    </section>
  );
}
