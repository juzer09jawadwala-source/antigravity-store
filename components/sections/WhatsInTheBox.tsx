import React from "react";

export default function WhatsInTheBox() {
  return (
    <section className="bg-white w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl md:text-[3.5rem] leading-tight font-semibold text-center text-[#1d1d1f] mb-10 md:mb-12">
          What’s in the Box
        </h2>
        
        <div className="flex flex-col items-center w-full">
          {/* The grey background box */}
          <div className="bg-[#f5f5f7] w-full max-w-5xl rounded-3xl h-[280px] md:h-[450px] flex justify-center items-end relative overflow-hidden">
            <div className="flex justify-center items-end w-full max-w-2xl h-full pb-0 relative px-4 md:px-0">
              
              {/* iPhone Image */}
              <div className="w-1/2 flex justify-center h-full items-end relative">
                <img loading="lazy" decoding="async" 
                  src="/burgundy/trans_18-pro-burgundy-close-up.webp" 
                  alt="iPhone 18 Pro"
                  className="w-[130px] sm:w-[150px] md:w-[260px] object-contain object-bottom translate-y-3 md:translate-y-6"
                />
              </div>

              {/* USB-C Cable Image */}
              <div className="w-1/2 flex justify-center h-full items-end">
                {/* SVG / CSS Simulation for USB-C Cable */}
                <div className="flex flex-col items-center translate-y-1 md:translate-y-2">
                  <div className="flex gap-4 md:gap-12">
                     {/* connector 1 */}
                     <div className="flex flex-col items-center">
                        <div className="w-[8px] md:w-[12px] h-[10px] md:h-[16px] bg-[#e2e2e5] rounded-t-[2px] md:rounded-t-[3px]"></div>
                        <div className="w-[16px] md:w-[24px] h-[26px] md:h-[40px] bg-white rounded-[3px] md:rounded-[4px] shadow-sm border border-[#e5e5ea]"></div>
                        <div className="w-[4px] md:w-[8px] h-[120px] md:h-[220px] bg-white shadow-[inset_0_0_4px_rgba(0,0,0,0.05)] border-l border-r border-[#e5e5ea]"></div>
                     </div>
                     {/* connector 2 */}
                     <div className="flex flex-col items-center">
                        <div className="w-[8px] md:w-[12px] h-[10px] md:h-[16px] bg-[#e2e2e5] rounded-t-[2px] md:rounded-t-[3px]"></div>
                        <div className="w-[16px] md:w-[24px] h-[26px] md:h-[40px] bg-white rounded-[3px] md:rounded-[4px] shadow-sm border border-[#e5e5ea]"></div>
                        <div className="w-[4px] md:w-[8px] h-[120px] md:h-[220px] bg-white shadow-[inset_0_0_4px_rgba(0,0,0,0.05)] border-l border-r border-[#e5e5ea]"></div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Below the Images */}
          <div className="flex justify-center w-full max-w-2xl mt-8">
            <div className="w-1/2 text-center">
              <p className="text-[#1d1d1f] font-medium text-[13px] md:text-[15px]">iPhone 18 Pro</p>
            </div>
            <div className="w-1/2 text-center">
              <p className="text-[#1d1d1f] font-medium text-[13px] md:text-[15px]">USB-C Charge Cable</p>
            </div>
          </div>
        </div>

        {/* Environmental Goals */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <h3 className="text-[#1d1d1f] font-semibold text-[15px] md:text-[17px] mb-4">
            Our environmental goals.
          </h3>
          <p className="text-[#86868b] text-[13px] md:text-[15px] leading-[1.6] mb-4">
            As part of our efforts to reach <a href="#" className="text-[#0066cc] hover:underline">carbon neutrality by 2030</a>, iPhone 18 Pro and iPhone 18 Pro Max do not include a power adapter or EarPods. Included in the box is a USB-C Charge Cable that supports fast charging and is compatible with USB-C power adapters and computer ports.
          </p>
          <p className="text-[#86868b] text-[13px] md:text-[15px] leading-[1.6]">
            We encourage you to use any compatible USB-C power adapter. If you need a new Apple power adapter or headphones, they are available for purchase.
          </p>
        </div>
      </div>
    </section>
  );
}
