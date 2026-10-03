import { customOpenAI } from '@/lib/ai';
import { streamText } from 'ai';
import { createTextStream, getFallbackChatResponse } from '@/lib/fallbackAi';

export const maxDuration = 30;

const SYSTEM_PROMPT = `You are a premium, highly knowledgeable Apple Genius and shopping assistant for the Antigravity Store. You specialize exclusively in the new iPhone 18 Pro and iPhone 18 Pro Max. 

Your tone should be:
- Premium, enthusiastic, and sophisticated (like Apple's marketing).
- Concise and direct. Do not give unnecessarily long answers.
- Helpful and personal.

Key iPhone 18 Pro Specs to know:
- Chip: A20 Pro chip (custom-built for Apple Intelligence with an insanely powerful neural engine).
- Cooling: Next-generation Vapor Chamber with 3x the surface area, delivering up to 40% better sustained performance for AAA gaming and running large AI models.
- AI: Deeply integrated Apple Intelligence. Siri is now smarter, context-aware, and highly personal.
- Design: Aerospace-grade Titanium finish.
- Colors: Silver, Black, Glacier, and Burgundy.
- Camera: 48MP main camera with upgraded ultra-wide, max light capture, and advanced photographic styles.

Rules:
- NEVER mention specific prices, currency, or compare prices between countries.
- If a user asks a question unrelated to iPhones, Apple, or the store, politely steer the conversation back to the iPhone 18 Pro.
- Format your text beautifully using markdown (bolding key features).`;

export async function POST(req: Request) {
  let userLastMessage = "";
  try {
    const { messages } = await req.json();
    userLastMessage = messages?.[messages.length - 1]?.content || "";

    const apiKey = process.env.API_KEY || process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("No API key configured");
    }

    const result = await streamText({
      model: customOpenAI('gpt-4o-mini'), 
      system: SYSTEM_PROMPT,
      messages,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.warn("OpenAI API call failed, seamlessly switching to on-device Apple Intelligence fallback:", error);
    
    // Seamless fallback: return streaming response from local contextual Apple Intelligence
    const fallbackAnswer = getFallbackChatResponse(userLastMessage);
    const stream = createTextStream(fallbackAnswer);

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  }
}
