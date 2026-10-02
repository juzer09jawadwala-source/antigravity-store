/* eslint-disable */
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CylinderCarousel({ images }: { images: string[] }) {
  const [mounted, setMounted] = useState(false);
  const [radius, setRadius] = useState(1000);
  const [itemWidth, setItemWidth] = useState(500);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const updateSize = () => {
      const width = window.innerWidth;
      // Massive scale to break limits and render huge phones
      if (width < 640) {
        setItemWidth(250);
        setRadius(450);
      } else if (width < 1024) {
        setItemWidth(400);
        setRadius(750);
      } else {
        setItemWidth(600); // Huge items
        setRadius(1150); // Massive radius to accommodate 12 * 600px items
      }
    };
    
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  
  if (!mounted) return null;

  const numItems = images.length;
  const angle = 360 / numItems;

  return (
    // Make container huge to accommodate the scale, use a large perspective to prevent fish-eye distortion
    <div className="relative w-full h-[600px] md:h-[900px] flex items-center justify-center overflow-visible" style={{ perspective: "3000px" }}>
      <motion.div
        className="relative w-0 h-0 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: -360 }} // Rotate leftwards continuously
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        {images.map((src, i) => {
          const itemAngle = angle * i;
          return (
            <div
              key={i}
              className="absolute flex items-center justify-center"
              style={{
                width: itemWidth,
                transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
              }}
            >
              {/* No max height, let the image render full scale for the massive width */}
              <img loading="lazy" decoding="async" 
                src={src} 
                alt={`iPhone view ${i}`} 
                className="w-full h-auto object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.9)]" 
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
