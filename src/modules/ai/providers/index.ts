// src/lib/ai/providers/index.ts
import { openaiProvider } from "./openai";
import { geminiProvider } from "./gemini";
import type { AiProvider, OpenAiResponse, GeminiResponse } from "../types";

export const providers = {
  "OpenAI": openaiProvider,
  "Google": geminiProvider,
} as const;

export type ProviderName = keyof typeof providers;

// Type mapping for provider responses
export type ProviderResponseMap = {
  "OpenAI": OpenAiResponse;
  "Google": GeminiResponse;
};