// src/lib/ai/providers/openai.ts
import OpenAI from "openai";
import type { AiProvider, OpenAiResponse } from "../types";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const openaiProvider: AiProvider<OpenAiResponse> = {
  name: "OpenAI",

  async createResponse(
    input: string,
    model: string,
    instructions?: string
  ): Promise<OpenAiResponse> {
    const response = await openai.responses.create({
      model,
      instructions,
      input,
    });

    return {
      id: response.id,
      content: response.output_text,
      model: response.model,
      inputTokens: response.usage?.input_tokens,
      outputTokens: response.usage?.output_tokens,
      totalTokens: response.usage?.total_tokens,
    };
  },
};
