"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, RotateCcw, Cpu, Wind, Camera, BatteryCharging, CheckCircle2 } from "lucide-react";

const PRESET_PERSONAS = [
  {
    icon: "🎬",
    label: "4K Video Creator",
    prompt: "I am a content creator shooting ProRes Log 4K videos on the go, editing high-bitrate reels in DaVinci Resolve, and need huge storage with zero thermal lag.",
  },
  {
    icon: "⚡",
    label: "Competitive Gamer",
    prompt: "I play intensive 120 FPS games like Genshin Impact and Resident Evil for 3+ hours continuously. I hate screen dimming and thermal throttling.",
  },
  {
    icon: "✈️",
    label: "Global Executive",
    prompt: "I fly constantly between timezones, manage dozens of spreadsheets and video meetings, and need maximum battery life and reliable Apple Intelligence summarization.",
  },
  {
    icon: "📸",
    label: "Street Photographer",
    prompt: "I shoot candid portraits and nighttime architecture. I want the finest dynamic range, fast optical zoom, and a sleek titanium pocketable device.",
  },
];

export default function AiMatchmaker() {
  const [prompt, setPrompt] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [recommendation, setRecommendation] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  // Dynamic image resolution based on the AI's streamed output
  const getMatchedImage = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes("burgundy")) {
      return {
        src: "/burgundy/trans_18-pro-burgundy-full.webp",
        colorName: "Titanium Burgundy",
        colorClass: "from-[#4a1525]/40 to-[#220710]/40 border-[#ff375f]/30",
      };
    }
    if (lower.includes("glacier")) {
      return {
        src: "/glacier/trans_18-pro-glacier-full.webp",
        colorName: "Glacier White",
        colorClass: "from-[#d0e5f5]/30 to-[#1a2936]/30 border-[#70b4ff]/30",
      };
    }
    if (lower.includes("silver")) {
      return {
        src: "/silver/trans_18-pro-silver-full.webp",
        colorName: "Natural Silver",
        colorClass: "from-[#e3e4e8]/20 to-[#1c1d22]/40 border-[#e3e4e8]/30",
      };
    }
    // Default to Black
    return {
      src: "/black/trans_18-pro-black-full.webp",
      colorName: "Deep Space Black",
      colorClass: "from-[#1d1d1f]/60 to-[#0a0a0c]/80 border-white/20",
    };
  };

  const matchedDevice = getMatchedImage(recommendation);

  const handleMatch = async (textToUse?: string) => {
    const query = textToUse || prompt;
    if (!query.trim() || isStreaming) return;

    if (textToUse) setPrompt(textToUse);
    setIsStreaming(true);
    setRecommendation("");
    setHasSearched(true);

    try {
      const response = await fetch("/api/matchmaker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: query }),
      });

      if (!response.ok) throw new Error("Matchmaker error");
      if (!response.body) throw new Error("Empty response");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      // Smooth scroll toward the result
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 150);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        accumulated += chunk;
        setRecommendation(accumulated);
      }
    } catch (err) {
      console.error(err);
      setRecommendation("Unable to complete matching at this moment. Please verify your connection or try again.");
    } finally {
      setIsStreaming(false);
    }
  };

  const handleReset = () => {
    setPrompt("");
    setRecommendation("");
    setHasSearched(false);
  };

  return (
    <section className="relative w-full py-24 bg-[#050505] text-white overflow-hidden border-t border-white/10">
      {/* Background ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-pink-600/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium tracking-wider uppercase text-purple-300 mb-5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            <span>Apple Intelligence Matchmaker</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#f5f5f7] mb-5">
            Which iPhone 18 Pro is right for you?
          </h2>
          
          <p className="text-lg md:text-xl text-[#86868b] leading-relaxed font-normal">
            Describe your workflow, creative habits, or gaming demands. Apple Intelligence will calculate your bespoke hardware configuration.
          </p>
        </div>

        {/* Interactive Query Card */}
        <div className="bg-[#121214]/80 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl mb-12">
          
          {/* Quick Persona Pills */}
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-[#86868b] font-medium block mb-3">
              Or pick an archetype to test:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {PRESET_PERSONAS.map((persona, idx) => (
                <button
                  key={idx}
                  onClick={() => handleMatch(persona.prompt)}
                  disabled={isStreaming}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm bg-white/5 hover:bg-white/10 text-[#d2d2d7] hover:text-white border border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  <span>{persona.icon}</span>
                  <span className="font-medium">{persona.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Text Input Area */}
          <div className="relative mb-6">
            <textarea
              rows={3}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. I shoot ProRes 4K travel vlogs, play heavy AAA games for hours, and need battery that lasts 2 full days..."
              className="w-full bg-[#1c1c1e]/70 border border-white/10 rounded-2xl p-4 md:p-5 text-[#f5f5f7] placeholder-[#6e6e73] text-base md:text-lg focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none font-sans"
              disabled={isStreaming}
            />
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs text-[#86868b]">
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                <span>A20 Pro Silicon</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Wind className="w-3.5 h-3.5 text-cyan-400" />
                <span>Vapor Chamber Thermals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-purple-400" />
                <span>48MP Fusion Optics</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {hasSearched && (
                <button
                  onClick={handleReset}
                  className="px-4 py-3 rounded-full text-sm font-medium text-[#86868b] hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset</span>
                </button>
              )}

              <button
                onClick={() => handleMatch()}
                disabled={!prompt.trim() || isStreaming}
                className="relative group p-[1px] rounded-full overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:opacity-100 transition-opacity" />
                <div className="relative px-6 py-3 rounded-full bg-black group-hover:bg-black/80 transition-colors flex items-center gap-2">
                  {isStreaming ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="text-sm font-medium text-white">Synthesizing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-purple-300" />
                      <span className="text-sm font-medium text-white">Find My Match</span>
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Match Result Display */}
        <div ref={resultRef}>
          <AnimatePresence>
            {hasSearched && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className={`bg-gradient-to-b ${matchedDevice.colorClass} border rounded-3xl p-6 md:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Recommended Device Visual Card */}
                  <div className="lg:col-span-5 flex flex-col items-center text-center">
                    <div className="relative w-64 h-80 md:w-72 md:h-96 flex items-center justify-center">
                      <Image
                        src={matchedDevice.src}
                        alt="Your Recommended iPhone 18 Pro"
                        fill
                        className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-700 hover:scale-105"
                        priority
                      />
                    </div>

                    <div className="mt-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/15 mb-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Calculated Match</span>
                      </span>
                      <h4 className="text-xl font-semibold text-white tracking-tight">
                        {matchedDevice.colorName}
                      </h4>
                      <p className="text-xs text-[#86868b] mt-1">
                        Aerospace Titanium Alloy • Next-Gen Vapor Chamber
                      </p>
                    </div>

                    <a
                      href="#order-summary"
                      className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-[#f5f5f7] transition-all hover:scale-105 active:scale-95 shadow-lg"
                    >
                      <span>Configure This Device</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Right Column: AI Analysis Markdown Stream */}
                  <div className="lg:col-span-7 bg-black/40 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
                    <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-purple-400">
                      <Sparkles className="w-4 h-4" />
                      <span>Apple Intelligence Evaluation</span>
                    </div>

                    {recommendation ? (
                      <div className="prose prose-invert max-w-none text-[#d2d2d7] leading-relaxed text-sm md:text-base space-y-4 font-sans">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: recommendation
                              .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-white mt-4 mb-2 tracking-tight">$1</h3>')
                              .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mt-5 mb-3 tracking-tight">$1</h2>')
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                              .replace(/^- (.*$)/gim, '<li class="ml-4 list-disc text-[#d2d2d7] my-1">$1</li>')
                              .replace(/\n\n/g, '<div class="h-2"></div>'),
                          }}
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-12 text-center text-[#86868b]">
                        <div className="w-8 h-8 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin mb-4" />
                        <p className="text-sm font-medium">Analyzing neural compute & thermal load demands...</p>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
