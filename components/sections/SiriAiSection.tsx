import React from "react";

export default function SiriAiSection() {
  return (
    <section className="w-full bg-black min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center overflow-hidden py-24 relative">
      <div 
        className="w-full h-full max-w-[1440px] mx-auto flex justify-center items-center relative z-10 px-4 md:px-0"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)'
        }}
      >
        <img 
          loading="lazy" 
          decoding="async"
          src="/siri-ai-hero-trans.webp" 
          alt="Apple Intelligence and Siri" 
          className="w-full h-auto max-h-[85vh] object-contain drop-shadow-2xl"
        />
      </div>
      
      {/* 
        Optional text gradient or shadow overlay if the image needs to blend into the black background. 
        Since Apple's images usually fade beautifully into #000000, bg-black on the section handles it perfectly.
      */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
    </section>
  );
}
