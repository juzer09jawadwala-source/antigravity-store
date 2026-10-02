import React from "react";
import { CylinderCarousel } from "../ui/cylinder-carousel";

const IPHONE_IMAGES = [
  "/black/trans_18-pro-black-full.webp",
  "/black/trans_18-pro-black-side.webp",
  "/black/trans_18-pro-black-close-up.webp",
  
  "/burgundy/trans_18-pro-burgundy-full.webp",
  "/burgundy/trans_18-pro-burgundy-side.webp",
  "/burgundy/trans_18-pro-burgundy-close-up.webp",
  
  "/glacier/trans_18-pro-glacier-full.webp",
  "/glacier/trans_18-pro-glacier-side.webp",
  "/glacier/trans_18-pro-glacier-close-up.webp",
  
  "/silver/trans_18-pro-silver-full.webp",
  "/silver/trans_18-pro-silver-side.webp",
  "/silver/trans_18-pro-silver-close-up.webp",
];

export default function IPhoneCarouselSection() {
  return (
    <section className="w-full bg-[#050505] py-32 overflow-x-hidden overflow-y-visible border-t border-[#424245]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight mb-4">
          Stunning from every angle.
        </h2>
        <p className="text-[17px] text-gray-400">
          Available in four gorgeous titanium finishes.
        </p>
      </div>
      
      {/* End to end full width carousel container */}
      <div className="w-full overflow-visible">
        <CylinderCarousel images={IPHONE_IMAGES} />
      </div>
    </section>
  );
}
