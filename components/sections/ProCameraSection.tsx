import React from 'react';
import Image from 'next/image';

export default function ProCameraSection() {
  const carouselItems = [
    {
      title: "Pro controls.",
      copy: "In the Camera app, you can bring your most-used settings to the top for quicker access. Add new settings like aperture, shutter speed, white balance and histogram.",
      image: "/images/pro-camera/freak/pro_controls__esrtcpjxy3qu_large.jpg"
    },
    {
      title: "Variable zoom.",
      copy: "Seamlessly glide through zoom levels with the new tactile slider. Perfect for framing the exact shot you want.",
      image: "/images/pro-camera/freak/zoom.jpg"
    },
    {
      title: "Photographic Styles.",
      copy: "Personalize your photos by adjusting tone and warmth to match your exact creative vision.",
      image: "/images/pro-camera/freak/style.jpg"
    },
    {
      title: "Advanced editing.",
      copy: "Take full control of your creative process with pro-level editing tools right in the Photos app.",
      image: "/images/pro-camera/freak/editing.jpg"
    },
    {
      title: "Focus tracking.",
      copy: "Keep your subject in sharp focus even when they're moving unpredictably across the frame.",
      image: "/images/pro-camera/freak/tracking.jpg"
    }
  ];

  return (
    <section id="pro-camera" className="w-full bg-[#000000] text-white pt-24 md:pt-36 pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eye-opening control. */}
        <div className="text-center mb-24 md:mb-32">
          <h2 className="text-[3.5rem] sm:text-7xl md:text-[6rem] lg:text-[7rem] font-semibold tracking-tighter text-[#f5f5f7] leading-[1.05] mb-12">
            Eye-opening control.
          </h2>
          <div className="relative w-full max-w-[1200px] mx-auto mb-16 rounded-3xl overflow-hidden">
            <img 
              src="/images/pro-camera/28.jpg" 
              alt="Pro Camera System" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
            <div className="md:col-span-8">
              <p className="text-[1.3rem] sm:text-2xl md:text-[1.75rem] font-semibold tracking-tight text-[#86868b] leading-[1.15]">
                Meet our <span className="text-[#f5f5f7]">best-ever camera system for pros and creators</span>. iPhone 18 Pro breaks new ground with a variable aperture on the 48MP Fusion Main camera, delivering better <span className="whitespace-nowrap">low-light</span> photos and video and sharper detail throughout the scene. And with new Pro controls and Photographic Styles 3 to adjust texture and grain, you’ll have even more creative range.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-row md:flex-col gap-10 md:gap-12 pt-2 border-t border-[#424245] md:border-t-0 md:border-l md:pl-12">
              <div>
                <p className="text-[#86868b] text-[1.1rem] font-semibold tracking-tight leading-tight mb-2">All</p>
                <p className="text-[#f5f5f7] text-4xl sm:text-5xl font-semibold tracking-tighter leading-none mb-2">48MP</p>
                <p className="text-[#86868b] text-[1.1rem] font-semibold tracking-tight leading-tight">rear cameras</p>
              </div>
              <div>
                <p className="text-[#86868b] text-[1.1rem] font-semibold tracking-tight leading-tight mb-2">Up to</p>
                <p className="text-[#f5f5f7] text-4xl sm:text-5xl font-semibold tracking-tighter leading-none mb-2">8x</p>
                <p className="text-[#86868b] text-[1.1rem] font-semibold tracking-tight leading-tight">optical-quality zoom</p>
              </div>
            </div>
          </div>
        </div>

        {/* Variable aperture. */}
        <div className="max-w-[1200px] mx-auto mb-32 md:mb-48">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            <div className="w-full md:w-[55%]">
              <img src="/images/pro-camera/f148.jpg" alt="Variable aperture comparison" className="w-full h-auto rounded-3xl" />
            </div>
            <div className="w-full md:w-[45%]">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-[#f5f5f7] leading-tight mb-6 md:mb-8">
                Variable aperture.<br/>If you know, you pro.
              </h3>
              <p className="text-[#86868b] text-xl font-semibold tracking-tight leading-relaxed">
                The new variable aperture on the Main camera adjusts for better lighting and depth of field automatically — so everything from candid portraits to cinematic videos looks its best. For more versatility, use it with custom Pro controls in the Camera app — like shutter speed to capture fast action in incredible detail.
              </p>
            </div>
          </div>
        </div>

        {/* Such a control freak. */}
        <div className="w-full">
          <h3 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-semibold tracking-tighter text-[#f5f5f7] leading-tight mb-12 md:mb-16 pl-4 md:pl-0 max-w-[1200px] mx-auto">
            Such a control freak.
          </h3>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-12 px-4 md:px-0 md:ml-[calc(50vw-600px)] lg:ml-[calc(50vw-600px)] pl-0">
            {carouselItems.map((item, index) => (
              <div key={index} className="snap-start shrink-0 w-[85vw] md:w-[45vw] lg:w-[420px] bg-[#111111] rounded-[2rem] overflow-hidden flex flex-col hover:bg-[#1a1a1a] transition-colors duration-300">
                <div className="h-[280px] md:h-[320px] w-full overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-10 flex-1">
                  <h4 className="text-2xl font-semibold tracking-tight text-[#f5f5f7] mb-3">{item.title}</h4>
                  <p className="text-[#86868b] font-medium text-lg leading-snug">
                    {item.copy}
                  </p>
                </div>
              </div>
            ))}
            {/* Spacer for right padding in scroll */}
            <div className="snap-start shrink-0 w-4 md:w-[calc(50vw-600px)]"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
