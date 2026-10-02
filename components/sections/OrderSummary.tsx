import Image from "next/image";
import { Truck, ShoppingBag, Bookmark } from "lucide-react";

export default function OrderSummary() {
  return (
    <section className="bg-[#f5f5f7] w-full pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column (Text + Image) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-6 lg:mb-10 z-10 relative">
              <h2 className="text-4xl md:text-[2.75rem] leading-[1.15] font-semibold text-[#1d1d1f] tracking-tight">
                Your new <br />iPhone 18 Pro.
              </h2>
              <h3 className="text-4xl md:text-[2.75rem] leading-[1.15] font-semibold text-[#86868b] tracking-tight mt-1">
                Just the way you <br />want it.
              </h3>
            </div>
            {/* Fixed Image Container: No longer absolute or overflowing */}
            <div className="relative w-full flex-grow flex items-end justify-center lg:justify-start lg:-ml-8 mt-4 lg:mt-0">
              <Image
                src="/glacier/trans_18-pro-glacier-close-up.webp"
                alt="iPhone 18 Pro Glacier"
                width={800}
                height={800}
                className="w-[90%] sm:w-[340px] lg:w-[130%] max-w-[480px] h-auto object-contain relative z-0"
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-4 flex flex-col pt-2 md:pt-4">
            <p className="text-[#1d1d1f] font-semibold text-[17px] leading-snug mb-10">
              Your custom iPhone 18 Pro configuration.
            </p>
            
            <hr className="border-[#d2d2d7] mb-8" />
            
            <div className="mb-8">
              <p className="text-[#1d1d1f] font-semibold text-[17px] mb-2">Need a moment?</p>
              <p className="text-[#86868b] text-[15px] leading-relaxed mb-4">
                Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.
              </p>
              <button className="flex items-center gap-2 text-[#0066cc] text-[15px] hover:underline">
                <Bookmark className="w-4 h-4" />
                Save for later
              </button>
            </div>
            
            <hr className="border-[#d2d2d7] mb-6" />
            
            <p className="text-[#1d1d1f] text-[15px]">
              Delivery details for your area will be shown in Checkout.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 flex flex-col pt-2 md:pt-4 lg:pl-4">
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4 text-[#1d1d1f] text-[15px]">
                <Truck className="w-6 h-6 stroke-[1.5] text-[#1d1d1f] shrink-0" />
                <span className="pt-0.5">Free shipping</span>
              </div>
              <div className="flex items-start gap-4 text-[#1d1d1f] text-[15px]">
                <ShoppingBag className="w-6 h-6 stroke-[1.5] text-[#1d1d1f] shrink-0" />
                <span className="pt-0.5">Pick up from Store</span>
              </div>
            </div>
            
            {/* Apple's disabled/soft blue state from the screenshot */}
            <button className="w-full bg-[#9bc3ef] hover:bg-[#0071e3] text-white py-3 px-4 rounded-xl text-[17px] font-normal transition-colors">
              Continue
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
