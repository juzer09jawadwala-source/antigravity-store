"use client";

import React from "react";
import { Smartphone, BatteryFull, Cpu, Camera, Aperture, Sparkles, Box, User } from "lucide-react";

type SpecData = {
  icon: React.ReactNode;
  main?: string;
  sub: string[];
};

type ModelData = {
  isNew: boolean;
  name: string;
  tagline: string;
  colors: string[];
  image: string;
  specs: Record<string, SpecData>;
};

const MODELS: ModelData[] = [
  {
    isNew: true,
    name: "iPhone Duo",
    tagline: "The largest display of any iPhone. Foldable. Powerful. And durable.",
    colors: ["#3b3b3e", "#e3e5e3", "#d4c8b6"],
    image: "/iphone-card-40-duo-202609.webp",
    specs: {
      screen: {
        icon: <Smartphone className="w-8 h-8 mb-4" strokeWidth={1} />,
        main: '19.26 cm (7.6")',
        sub: [
          "Super Retina XDR folding display",
          "ProMotion technology",
          "Always-On display",
          "Dynamic Island"
        ]
      },
      design: {
        icon: <Box className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: [
          "Titanium-reinforced hinge",
          "Action button",
          "Ceramic Shield front (folded) and back"
        ]
      },
      battery: {
        icon: <BatteryFull className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["Up to 34 hours", "video playback³"]
      },
      chip: {
        icon: <Cpu className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: [
          "A20 Pro chip",
          "6-core GPU",
          "16-core Neural Engine",
          "Hardware-accelerated ray tracing"
        ]
      },
      camera: {
        icon: <Camera className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: [
          "48MP Dual Fusion camera",
          "Super-high-resolution photos",
          "Next-generation portraits",
          "Macro photography"
        ]
      },
      frontCamera: {
        icon: <User className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["12MP Center Stage front camera"]
      },
      zoom: {
        icon: <Aperture className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["Optical zoom options"]
      },
      ai: {
        icon: <Sparkles className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["Apple Intelligence", "built in"]
      }
    }
  },
  {
    isNew: true,
    name: "iPhone 18 Pro",
    tagline: "A big leap in battery life, performance and camera of any iPhone.",
    colors: ["#4a3b3e", "#3b3b3e", "#e3e5e3", "#d4c8b6"],
    image: "/burgundy/trans_18-pro-burgundy-full.webp",
    specs: {
      screen: {
        icon: <Smartphone className="w-8 h-8 mb-4" strokeWidth={1} />,
        main: '17.42 cm (6.9") or 15.93 cm (6.3")',
        sub: [
          "Super Retina XDR display",
          "ProMotion technology",
          "Always-On display",
          "Dynamic Island"
        ]
      },
      design: {
        icon: <Box className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: [
          "Titanium unibody",
          "Action button",
          "Ceramic Shield front and back"
        ]
      },
      battery: {
        icon: <BatteryFull className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["Up to 33 hours", "video playback³"]
      },
      chip: {
        icon: <Cpu className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: [
          "A20 Pro chip",
          "6-core GPU",
          "16-core Neural Engine",
          "Hardware-accelerated ray tracing"
        ]
      },
      camera: {
        icon: <Camera className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: [
          "48MP Fusion camera system",
          "Super-high-resolution photos",
          "Next-generation portraits",
          "Macro photography"
        ]
      },
      frontCamera: {
        icon: <User className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["12MP Center Stage front camera"]
      },
      zoom: {
        icon: <Aperture className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["0.5x, 1x, 2x, 5x optical zoom options"]
      },
      ai: {
        icon: <Sparkles className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["Apple Intelligence", "built in"]
      }
    }
  },
  {
    isNew: true,
    name: "iPhone Air",
    tagline: "Incredibly light and thin with pro performance.",
    colors: ["#a1b5c9", "#3b3b3e", "#e3e5e3"],
    image: "/air.webp",
    specs: {
      screen: {
        icon: <Smartphone className="w-8 h-8 mb-4" strokeWidth={1} />,
        main: '16.63 cm (6.5")',
        sub: [
          "Super Retina XDR display",
          "ProMotion technology",
          "Always-On display",
          "Dynamic Island"
        ]
      },
      design: {
        icon: <Box className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: [
          "Titanium frame",
          "Action button",
          "Ceramic Shield front and back"
        ]
      },
      battery: {
        icon: <BatteryFull className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["Up to 27 hours", "video playback³"]
      },
      chip: {
        icon: <Cpu className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: [
          "A20 Pro chip",
          "6-core GPU",
          "16-core Neural Engine",
          "Hardware-accelerated ray tracing"
        ]
      },
      camera: {
        icon: <Camera className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: [
          "48MP Fusion camera system",
          "Super-high-resolution photos",
          "Next-generation portraits",
          "Macro photography"
        ]
      },
      frontCamera: {
        icon: <User className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["12MP Center Stage front camera"]
      },
      zoom: {
        icon: <Aperture className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["Optical zoom options"]
      },
      ai: {
        icon: <Sparkles className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["Apple Intelligence", "built in"]
      }
    }
  },
  {
    isNew: false,
    name: "iPhone 17",
    tagline: "Powerful, durable and delightful.",
    colors: ["#c5b5d8", "#b6d1c7", "#f3e1d1", "#e3e5e3", "#3b3b3e"],
    image: "/17.webp",
    specs: {
      screen: {
        icon: <Smartphone className="w-8 h-8 mb-4" strokeWidth={1} />,
        main: '15.93 cm (6.3")',
        sub: [
          "Super Retina XDR display",
          "—",
          "—",
          "Dynamic Island"
        ]
      },
      design: {
        icon: <Box className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: [
          "Aluminum frame",
          "Action button",
          "Ceramic Shield front and back"
        ]
      },
      battery: {
        icon: <BatteryFull className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["Up to 22 hours", "video playback³"]
      },
      chip: {
        icon: <Cpu className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: [
          "A19 chip",
          "5-core GPU",
          "16-core Neural Engine",
          "Hardware-accelerated ray tracing"
        ]
      },
      camera: {
        icon: <Camera className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: [
          "48MP Fusion camera system",
          "Super-high-resolution photos",
          "Next-generation portraits",
          "Macro photography"
        ]
      },
      frontCamera: {
        icon: <User className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["12MP Center Stage front camera"]
      },
      zoom: {
        icon: <Aperture className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["Optical zoom options"]
      },
      ai: {
        icon: <Sparkles className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["Apple Intelligence", "built in"]
      }
    }
  },
  {
    isNew: false,
    name: "iPhone 17e",
    tagline: "Feature-packed. Value packed.",
    colors: ["#f2cfd4", "#e3e5e3", "#3b3b3e"],
    image: "/17e.webp",
    specs: {
      screen: {
        icon: <Smartphone className="w-8 h-8 mb-4" strokeWidth={1} />,
        main: '15.40 cm (6.1")',
        sub: [
          "Super Retina XDR display",
          "—",
          "—",
          "—"
        ]
      },
      design: {
        icon: <Box className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: [
          "Aluminum frame",
          "Action button",
          "—"
        ]
      },
      battery: {
        icon: <BatteryFull className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["Up to 20 hours", "video playback³"]
      },
      chip: {
        icon: <Cpu className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: [
          "A19 chip",
          "5-core GPU",
          "16-core Neural Engine",
          "Hardware-accelerated ray tracing"
        ]
      },
      camera: {
        icon: <Camera className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: [
          "48MP Fusion camera system",
          "Super-high-resolution photos",
          "Next-generation portraits",
          "—"
        ]
      },
      frontCamera: {
        icon: <User className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["12MP TrueDepth camera"]
      },
      zoom: {
        icon: <Aperture className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["Optical zoom options"]
      },
      ai: {
        icon: <Sparkles className="w-8 h-8 mb-4" strokeWidth={1} />,
        sub: ["Apple Intelligence", "built in"]
      }
    }
  }
];

export default function CompareModels() {
  return (
    <section className="bg-black py-24 border-t border-[#424245]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight mb-4">
            Which iPhone is right for you?
          </h2>
        </div>

        {/* Desktop Comparison Table (Hidden on small screens) */}
        <div className="hidden lg:grid grid-cols-5 gap-4">
          {MODELS.map((model, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              
              {/* Product Header */}
              <div className="h-[250px] lg:h-[300px] flex items-end justify-center mb-6">
                <img loading="lazy" decoding="async" 
                src={model.image}
                  alt={model.name} 
                  className="h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform" 
                />
              </div>
              
              {/* Colors */}
              <div className="flex gap-2 mb-6">
                {model.colors.map((c, i) => (
                  <div key={i} className="w-3 h-3 rounded-full border border-white/20 shadow-inner" style={{ backgroundColor: c }} />
                ))}
              </div>

              {/* Title & Tagline */}
              <div className="flex flex-col h-[180px]">
                {model.isNew ? (
                  <span className="text-[#bf4800] text-xs font-semibold mb-2">New</span>
                ) : (
                  <div className="h-6" /> // spacer
                )}
                <h3 className="text-[24px] font-semibold text-white mb-2">{model.name}</h3>
                <p className="text-[13px] text-gray-300 leading-relaxed mb-4 px-2">{model.tagline}</p>
              </div>
              
              <div className="w-full h-px bg-[#424245] my-6" />

              {/* Specs Rows */}
              {Object.keys(model.specs).map((specKey, i) => {
                const spec = model.specs[specKey as keyof typeof model.specs];
                return (
                  <div key={i} className="flex flex-col items-center justify-start min-h-[160px] w-full px-2 mb-8">
                    {spec.icon}
                    {spec.main && (
                      <h4 className="text-[19px] font-semibold text-white mb-2">{spec.main}</h4>
                    )}
                    {spec.sub.map((line, j) => (
                      <p key={j} className="text-[12px] text-gray-400 leading-snug mb-1">
                        {line}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Mobile View: Stacked (Simplified version of the table) */}
        <div className="lg:hidden flex flex-col gap-12">
          {MODELS.map((model, idx) => (
            <div key={idx} className="flex flex-col items-center text-center border-b border-[#424245] pb-12">
              <div className="h-[250px] flex items-end justify-center mb-6">
                <img loading="lazy" decoding="async" 
                src={model.image}
                  alt={model.name} 
                  className="h-full object-contain drop-shadow-2xl" 
                />
              </div>
              {model.isNew && <span className="text-[#bf4800] text-xs font-semibold mb-2">New</span>}
              <h3 className="text-[24px] font-semibold text-white mb-2">{model.name}</h3>
              <p className="text-[13px] text-gray-300 mb-4">{model.tagline}</p>
              
              <div className="grid grid-cols-2 gap-8 w-full mt-6">
                {Object.keys(model.specs).map((specKey, i) => {
                  const spec = model.specs[specKey as keyof typeof model.specs];
                  return (
                    <div key={i} className="flex flex-col items-center text-center">
                      {spec.icon}
                      {spec.main && <h4 className="text-[15px] font-semibold text-white mb-1">{spec.main}</h4>}
                      <p className="text-[11px] text-gray-400">{spec.sub[0]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
