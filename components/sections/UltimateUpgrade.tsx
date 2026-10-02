"use client";

import { ChevronDown } from "lucide-react";

export default function UltimateUpgrade() {
  return (
    <section className="bg-black w-full overflow-hidden flex flex-col items-center pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        
        <p className="text-[#86868b] text-[17px] font-medium tracking-tight mb-3">
          The ultimate upgrade
        </p>
        
        <h2 className="text-[#f5f5f7] text-[56px] md:text-[80px] font-bold tracking-tighter leading-none mb-10">
          Most wanted.
        </h2>
        
        <p className="text-[#86868b] text-[17px] md:text-[21px] font-medium leading-[1.4] max-w-[850px] mb-20">
          iPhone 18 Pro is <strong className="text-[#f5f5f7] font-semibold">purpose-built for unprecedented performance.</strong> Get up to 6 more hours of video playback on iPhone 18 Pro Max² compared with iPhone 17 Pro Max. Faster wired charging.³ Vapour-cooled A20 Pro chip to <strong className="text-[#f5f5f7] font-semibold">handle even the most intensive AI workloads.</strong> New 48MP Fusion Main camera with variable aperture for better-quality low-light photos and video and greater depth of field. All in a durable unibody with Ceramic Shield front and back — everything a pro wants.
        </p>

        {/* Subtle Horizontal Divider */}
        <div className="w-full max-w-[900px] border-t border-[#424245] mb-12"></div>

        {/* Compare Dropdown */}
        <div className="flex flex-col items-center mb-16">
          <p className="text-[#86868b] text-[12px] font-semibold mb-3 tracking-wide">
            Compare with
          </p>
          <button className="flex items-center justify-between px-5 py-2.5 bg-[#1d1d1f] hover:bg-[#333336] border border-[#424245] rounded-full min-w-[220px] transition-colors">
            <span className="text-[#f5f5f7] text-[14px] font-medium">iPhone 15 Pro</span>
            <ChevronDown className="w-4 h-4 text-[#86868b]" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 text-center mb-16">
          <div className="flex flex-col items-center">
            <span className="text-[#86868b] text-[12px] font-semibold mb-2">Up to</span>
            <h3 className="text-[#f5f5f7] text-[28px] md:text-[32px] font-bold tracking-tight mb-2">20 more hours</h3>
            <p className="text-[#86868b] text-[12px] font-medium leading-tight max-w-[120px]">
              video playback vs<br/>iPhone 15 Pro Max
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#86868b] text-[12px] font-semibold mb-2">Up to</span>
            <h3 className="text-[#f5f5f7] text-[28px] md:text-[32px] font-bold tracking-tight mb-2">50% faster</h3>
            <p className="text-[#86868b] text-[12px] font-medium leading-tight max-w-[120px]">
              6-core CPU
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#86868b] text-[12px] font-semibold mb-2">Up to</span>
            <h3 className="text-[#f5f5f7] text-[28px] md:text-[32px] font-bold tracking-tight mb-2">2.1x faster</h3>
            <p className="text-[#86868b] text-[12px] font-medium leading-tight max-w-[120px]">
              7-core GPU
            </p>
          </div>
        </div>
      </div>

      {/* Image Container - Expanded to show the full close-up shot */}
      <div className="w-full flex justify-center mt-4">
        <img loading="lazy" decoding="async" 
          src="/burgundy/trans_18-pro-burgundy-close-up.webp" 
          alt="iPhone 18 Pro Burgundy Close Up" 
          className="w-[95%] md:w-[900px] h-auto object-contain"
        />
      </div>
    </section>
  );
}
