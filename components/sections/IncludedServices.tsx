import React from "react";

export default function IncludedServices() {
  return (
    <section className="w-full bg-gradient-to-r from-[#8de6d6] via-[#99efcf] to-[#92e7da] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-8">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center max-w-lg mx-auto md:mx-0 z-10 text-center md:text-left">
            <h2 className="text-[2rem] md:text-[2.75rem] leading-[1.15] font-semibold text-[#1d1d1f] tracking-tight mb-4">
              Your new iPhone comes with <br className="hidden md:block" />
              so much more.
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#1d1d1f] leading-relaxed">
              Get 3 months of selected services free when you <br className="hidden md:block" />
              purchase an Apple device.<sup className="text-[11px] align-baseline">†</sup>
            </p>
          </div>

          {/* Icons/Images */}
          <div className="relative w-full h-[220px] md:h-[300px] flex items-center justify-center md:justify-end gap-4 sm:gap-6 md:gap-10">
              {/* Health Tracking Logo */}
              <img loading="lazy" decoding="async" 
                src="/health-tracker-trimmed.webp" 
                alt="Health Tracking Logo" 
                className="w-[110px] sm:w-[130px] md:w-[160px] aspect-square object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] -translate-y-6 md:-translate-y-12"
              />
              
              {/* Apple Music Logo */}
              <img loading="lazy" decoding="async" 
                src="/apple-music-trimmed.webp" 
                alt="Apple Music Logo" 
                className="w-[110px] sm:w-[130px] md:w-[160px] aspect-square object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] translate-y-6 md:translate-y-12"
              />
          </div>
          
        </div>
      </div>
    </section>
  );
}
