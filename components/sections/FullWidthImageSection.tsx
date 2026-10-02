import React from "react";


export default function FullWidthImageSection() {
  return (
    <section className="w-full bg-[#050505] overflow-hidden">
      <div className="w-full h-auto relative">
        <img 
          loading="lazy" 
          decoding="async"
          src="/apple-in-hero.webp" 
          alt="iPhone 18 Pro and iPhone 18 Pro Max - Apple (IN)" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
