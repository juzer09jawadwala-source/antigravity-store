// Fallback Apple Intelligence Engine with contextual understanding

export function createTextStream(fullText: string): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const words = fullText.split(" ");

  return new ReadableStream({
    async start(controller) {
      for (let i = 0; i < words.length; i++) {
        const chunk = (i === 0 ? "" : " ") + words[i];
        controller.enqueue(encoder.encode(chunk));
        await new Promise((resolve) => setTimeout(resolve, 18));
      }
      controller.close();
    },
  });
}

// Generate tailored Apple Genius answers for Siri Assistant
export function getFallbackChatResponse(userMessage: string): string {
  const q = userMessage.toLowerCase();

  if (q.includes("vapor") || q.includes("chamber") || q.includes("cooling") || q.includes("heat") || q.includes("thermal")) {
    return "The **iPhone 18 Pro** features Apple's most sophisticated thermal design ever engineered. We've introduced a **custom laser-welded Vapor Chamber** with **3x the active surface area**, bonded directly to the titanium frame. This delivers up to **40% better sustained performance**, ensuring zero frame drops during heavy AAA gaming sessions or extended 4K ProRes capture.";
  }

  if (q.includes("chip") || q.includes("a20") || q.includes("processor") || q.includes("cpu") || q.includes("gpu")) {
    return "At the heart of the iPhone 18 Pro is the breakthrough **A20 Pro chip**, built on a second-generation 2nm process. It features a new **6-core GPU with hardware ray tracing** and a redesigned **16-core Neural Engine** capable of running cutting-edge on-device Apple Intelligence models with unmatched power efficiency.";
  }

  if (q.includes("camera") || q.includes("photo") || q.includes("lens") || q.includes("video") || q.includes("prores") || q.includes("zoom")) {
    return "The new pro camera system on iPhone 18 Pro integrates a **48MP Fusion main sensor with next-gen quad-pixel capture**, an upgraded **48MP Ultra Wide lens**, and an enhanced **5x Telephoto prism**. With support for 4K 120 fps Dolby Vision and spatial audio recording, it turns every shot into cinematic masterwork.";
  }

  if (q.includes("color") || q.includes("finish") || q.includes("burgundy") || q.includes("glacier") || q.includes("black") || q.includes("silver")) {
    return "The iPhone 18 Pro is sculpted in aerospace-grade Grade 5 titanium, available in four breathtaking finishes: **Titanium Burgundy**, **Glacier White**, **Deep Space Black**, and **Natural Silver**. Each finish features micro-blasted textures with a refined satin feel.";
  }

  if (q.includes("battery") || q.includes("charge") || q.includes("life") || q.includes("duration")) {
    return "Thanks to the unmatched efficiency of the A20 Pro chip and optimized internal architecture, the iPhone 18 Pro delivers up to **29 hours of video playback**, while the iPhone 18 Pro Max pushes endurance up to an incredible **34 hours**. With high-speed MagSafe, you can reach 50% charge in just 25 minutes.";
  }

  if (q.includes("max") || q.includes("difference") || q.includes("compare") || q.includes("size")) {
    return "The **iPhone 18 Pro** features a 6.3-inch Super Retina XDR ProMotion display, perfect for one-handed agility. The **iPhone 18 Pro Max** expands to a stunning 6.9-inch canvas with the longest battery life ever in an iPhone (up to 34 hours). Both share identical A20 Pro silicon, Vapor Chamber cooling, and 48MP pro camera arrays.";
  }

  if (q.includes("price") || q.includes("cost") || q.includes("buy") || q.includes("order")) {
    return "You can select and configure your desired iPhone 18 Pro model, finish, and storage tier directly right here in the **Order Summary** and **Showcase** sections on this page.";
  }

  return "The **iPhone 18 Pro** represents our greatest leap in mobile engineering. Powered by the **A20 Pro silicon**, an all-new **laser-welded Vapor Chamber cooling system**, and deeply integrated **Apple Intelligence**, it is built to handle your most demanding creative and computational workflows with effortless speed.";
}

// Generate tailored matchmaker evaluation
export function getFallbackMatchmakerResponse(prompt: string): string {
  const p = prompt.toLowerCase();

  let model = "iPhone 18 Pro Max";
  let storage = "512GB";
  let finish = "Titanium Burgundy";
  let rationaleLens = "5x Telephoto optical zoom and next-generation 48MP Fusion capture";
  let rationaleWorkflow = "extended pro workflows and high-demand multitasking";

  if (p.includes("game") || p.includes("gaming") || p.includes("fps") || p.includes("genshin")) {
    model = "iPhone 18 Pro Max";
    storage = "1TB";
    finish = "Deep Space Black";
    rationaleWorkflow = "sustained high-frame-rate AAA gaming with zero thermal throttling";
  } else if (p.includes("video") || p.includes("vlog") || p.includes("creator") || p.includes("prores") || p.includes("edit")) {
    model = "iPhone 18 Pro Max";
    storage = "1TB";
    finish = "Titanium Burgundy";
    rationaleWorkflow = "shooting 4K 120 fps ProRes Log footage directly to local storage";
  } else if (p.includes("travel") || p.includes("battery") || p.includes("flight") || p.includes("executive")) {
    model = "iPhone 18 Pro Max";
    storage = "512GB";
    finish = "Glacier White";
    rationaleWorkflow = "all-day 34-hour battery resilience and worldwide cellular roaming";
  } else if (p.includes("photo") || p.includes("street") || p.includes("compact") || p.includes("pocket")) {
    model = "iPhone 18 Pro";
    storage = "256GB";
    finish = "Natural Silver";
    rationaleWorkflow = "pocketable one-handed agility combined with pro-grade 48MP optics";
  }

  return `### 🎯 Your Bespoke Match
**Model:** ${model}
**Storage:** ${storage}
**Recommended Finish:** ${finish}

### ⚡ Why It's Built For You
- **A20 Pro Architecture:** Built on cutting-edge 2nm silicon, the A20 Pro Neural Engine provides the raw computational bandwidth needed for ${rationaleWorkflow}.
- **Vapor Chamber Thermal System:** The custom 3x surface area laser-welded vapor chamber channels heat away from the core, keeping peak performance locked without screen dimming.
- **Pro Camera & Capture:** Equipped with ${rationaleLens}, providing optical precision and cinema-grade dynamic range for any environment.
- **Form Factor & Battery:** Perfectly contoured titanium edges and an expansive display give you supreme endurance for whatever your day demands.

### 💡 Genius Verdict
The **${model} in ${finish}** is the definitive configuration engineered specifically for your passions. It transforms your daily mobile experience into a boundless creative studio.`;
}
