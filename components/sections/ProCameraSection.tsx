'use client';
import React, { useState } from 'react';

export default function ProCameraSection() {
  const [activeAperture, setActiveAperture] = useState(0);

  const apertures = [
    { label: 'ƒ/1.48', title: 'Maximum light.', copy: 'Around 50% better low-light performance — great for indoor scenes. Take better-quality Night mode photos faster.', image: '/images/pro-camera/f148.jpg' },
    { label: 'ƒ/1.8', title: 'Default.', copy: 'A versatile balance between low light and depth.', image: '/images/pro-camera/18.jpg' },
    { label: 'ƒ/2.8', title: 'More depth.', copy: 'A narrow aperture lets you capture detail farther back in the scene.', image: '/images/pro-camera/28.jpg' },
    { label: 'ƒ/4.0', title: 'Maximum depth.', copy: 'Use Pro controls to create artful effects manually, like a luminous starburst from bright light.', image: '/images/pro-camera/4.0.jpg' },
  ];

  const carouselItems = [
    {
      title: "Intelligent photo editing.",
      copy: "Reframe a photo after it’s been taken with Spatial Reframing. Expand your shots with the Extend tool. And remove even larger objects with the enhanced Clean Up tool. All possible with Apple Intelligence.",
      image: "/images/pro-camera/freak/editing.jpg",
      widthClass: "w-[85vw] md:w-[50vw] lg:w-[700px]" // Wide card
    },
    {
      title: "Smart focus tracking.",
      copy: "Whether you’re shooting photos or video, on-device intelligence lets you lock onto a subject and maintain focus as they move through the scene — even if they leave and then return.",
      image: "/images/pro-camera/freak/tracking.jpg",
      widthClass: "w-[85vw] md:w-[35vw] lg:w-[450px]" // Narrow card
    },
    {
      title: "8x optical-quality zoom.",
      copy: "Add extraordinary reach to your compositions with 8x optical-quality zoom — delivering 16x total optical zoom range.",
      image: "/images/pro-camera/freak/zoom.jpg",
      widthClass: "w-[85vw] md:w-[35vw] lg:w-[450px]" // Narrow card
    },
    {
      title: "Pro controls.",
      copy: "In the Camera app, you can bring your most-used settings to the top for quicker access. Add new settings like aperture, shutter speed, white balance and histogram.",
      image: "/images/pro-camera/freak/pro_controls__esrtcpjxy3qu_large.jpg",
      widthClass: "w-[85vw] md:w-[50vw] lg:w-[700px]" // Wide card
    },
    {
      title: "Photographic Styles.",
      copy: "Personalize your photos by adjusting tone and warmth to match your exact creative vision.",
      image: "/images/pro-camera/freak/style.jpg",
      widthClass: "w-[85vw] md:w-[35vw] lg:w-[450px]" // Narrow card
    }
  ];

  return (
    <section id="pro-camera" className="w-full bg-[#000000] text-white pt-24 md:pt-36 pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eye-opening control. */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-sm md:text-base font-semibold text-[#86868b] tracking-normal mb-3 md:mb-4">
            Pro camera system
          </p>
          <h2 className="text-[3.5rem] sm:text-7xl md:text-[6rem] lg:text-[7rem] font-semibold tracking-tighter text-[#f5f5f7] leading-[1.05] mb-8">
            Eye-opening control.
          </h2>
          
          <div className="max-w-[980px] mx-auto text-center mb-16">
            <p className="text-[1.3rem] sm:text-2xl md:text-[1.75rem] font-semibold tracking-tight text-[#86868b] leading-[1.15]">
              Meet our <span className="text-[#f5f5f7]">best-ever camera system for pros and creators</span>. iPhone 18 Pro breaks new ground with a variable aperture on the 48MP Fusion Main camera, delivering better <span className="whitespace-nowrap">low-light</span> photos and video and sharper detail throughout the scene. And with new Pro controls and Photographic Styles 3 to adjust texture and grain, you’ll have even more creative range.
            </p>
          </div>

          {/* Stats below the hero text */}
          <div className="max-w-[980px] mx-auto flex flex-col md:flex-row gap-10 md:gap-24 text-left justify-center border-t border-[#424245] pt-12 mb-24">
            <div className="flex-1 md:max-w-[200px]">
              <p className="text-[#86868b] text-[1.1rem] font-semibold tracking-tight leading-tight mb-2">All</p>
              <p className="text-[#f5f5f7] text-4xl sm:text-5xl font-semibold tracking-tighter leading-none mb-2">48MP</p>
              <p className="text-[#86868b] text-[1.1rem] font-semibold tracking-tight leading-tight">rear cameras</p>
            </div>
            <div className="flex-1 md:max-w-[400px]">
              <p className="text-[#f5f5f7] text-xl font-semibold tracking-tight leading-tight mb-2">48MP Fusion Main camera with variable aperture</p>
              <p className="text-[#86868b] text-[1.1rem] font-semibold tracking-tight leading-tight">24/48 mm focal length (1x/2x)</p>
            </div>
          </div>
        </div>

        {/* Interactive Aperture Viewer */}
        <div className="max-w-[1200px] mx-auto mb-32 md:mb-48 relative">
          
          {/* Image Container */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2.39/1] rounded-3xl overflow-hidden mb-8 transition-opacity duration-500">
            {apertures.map((ap, idx) => (
              <img 
                key={ap.label}
                src={ap.image} 
                alt={ap.title} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeAperture === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center bg-[#242426] rounded-full p-1 mb-8">
              {apertures.map((ap, idx) => (
                <button
                  key={ap.label}
                  onClick={() => setActiveAperture(idx)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeAperture === idx 
                      ? 'bg-[#000000] text-[#ffcc00]' 
                      : 'text-[#86868b] hover:text-[#f5f5f7]'
                  }`}
                >
                  {ap.label}
                </button>
              ))}
            </div>
            
            {/* Active Description */}
            <div className="text-center max-w-[800px] h-20 transition-all duration-500">
              <p className="text-[#86868b] text-base md:text-[1.15rem] leading-relaxed font-medium">
                <span className="text-[#ffcc00] font-semibold">{apertures[activeAperture].label} </span>
                <span className="text-[#f5f5f7] font-semibold">{apertures[activeAperture].title} </span>
                {apertures[activeAperture].copy}
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
              <div 
                key={index} 
                className={`snap-start shrink-0 ${item.widthClass} bg-[#111111] rounded-[2rem] overflow-hidden flex flex-col hover:bg-[#1a1a1a] transition-colors duration-300`}
              >
                <div className="h-[280px] md:h-[450px] w-full overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col justify-end">
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
