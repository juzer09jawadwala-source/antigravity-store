'use client';
import { useState, useEffect } from 'react';

export default function FloatingBuyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (roughly 600px)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-between gap-6 bg-[#1d1d1f]/90 backdrop-blur-xl border border-[#424245]/60 rounded-full px-6 py-3 shadow-2xl shadow-black/40 min-w-[320px] md:min-w-[480px]">
        {/* Product Name */}
        <span className="text-[#f5f5f7] text-sm md:text-base font-semibold tracking-tight whitespace-nowrap">
          iPhone 18 Pro
        </span>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#pro-camera"
            className="px-4 py-1.5 rounded-full text-sm font-medium text-[#f5f5f7] bg-[#333336] hover:bg-[#444448] transition-colors duration-200"
          >
            Explore
          </a>
          <a
            href="#order-summary"
            className="px-4 py-1.5 rounded-full text-sm font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] transition-colors duration-200"
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}
