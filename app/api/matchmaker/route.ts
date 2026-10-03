import { customOpenAI } from '@/lib/ai';
import { streamText } from 'ai';
import { createTextStream, getFallbackMatchmakerResponse } from '@/lib/fallbackAi';

export const maxDuration = 30;

const MATCHMAKER_SYSTEM_PROMPT = `You are the Apple Intelligence Matchmaker for the new iPhone 18 Pro and iPhone 18 Pro Max.
Your job is to analyze the user's workflow, creative projects, gaming intensity, or everyday habits, then return an authoritative, bespoke recommendation formatted with clean markdown.

You MUST structure your response with these exact sections:

### 🎯 Your Bespoke Match
**Model:** [iPhone 18 Pro OR iPhone 18 Pro Max]
**Storage:** [256GB, 512GB, 1TB, or 2TB]
**Recommended Finish:** [Titanium Burgundy, Glacier White, Deep Black, or Natural Silver]

### ⚡ Why It's Built For You
- **A20 Pro Architecture:** [Explain specifically how the next-gen 2nm silicon and Neural Engine accelerate their workload]
- **Vapor Chamber Thermal System:** [Explain how the 3x larger vapor chamber prevents thermal throttling, maintaining peak sustained performance for gaming/rendering]
- **Pro Camera & Capture:** [Explain which lens or video feature directly elevates their capture workflow]
- **Form Factor & Battery:** [Explain why this specific size and battery endurance matches their pace]

### 💡 Genius Verdict
[A 1-2 sentence closing statement in Apple's signature visionary, confident tone.]

CRITICAL RULES:
- NEVER mention prices, money, discounts, currencies, or price comparisons.
- Only recommend either the iPhone 18 Pro or iPhone 18 Pro Max.
- Emphasize the new Vapor Chamber thermal architecture and A20 Pro chip.
- Keep markdown clean and bold key specs.`;

export async function POST(req: Request) {
  let promptText = "";
  try {
    const { prompt } = await req.json();
    promptText = prompt || "";

    if (!promptText || typeof promptText !== 'string') {
      return new Response(JSON.stringify({ error: "A prompt is required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const apiKey = process.env.API_KEY || process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("No API key configured");
    }

    const result = await streamText({
      model: customOpenAI('gpt-4o-mini'),
      system: MATCHMAKER_SYSTEM_PROMPT,
      prompt: `User Persona and Needs: "${promptText.trim()}". Analyze this user's needs and determine the optimal iPhone 18 Pro configuration.`,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.warn("Matchmaker OpenAI API call failed, seamlessly switching to on-device Apple Intelligence fallback:", error);

    const fallbackAnswer = getFallbackMatchmakerResponse(promptText);
    const stream = createTextStream(fallbackAnswer);

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  }
}
