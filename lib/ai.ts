import { createOpenAI } from '@ai-sdk/openai';

export const customOpenAI = createOpenAI({
  apiKey: process.env.API_KEY || process.env.OPENAI_API_KEY || '',
});
