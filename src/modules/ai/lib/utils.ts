import { CHAT_TITLE_PROMPT } from "@/prompt";
import { Content } from "@google/genai";
import OpenAI from "openai";
import { Responses } from "openai/resources/index.mjs";

export interface Conversations {
  role: string;
  content: string;
}

export async function createTitle(userMessage: string) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const response = await openai.responses.create({
    model: "gpt-4.1-nano",
    input: userMessage,
    instructions: CHAT_TITLE_PROMPT,
  });

  return response;
}

export function toOpenAiHistory(
  conversations: Conversations[]
): Responses.ResponseInput {
  return conversations as Responses.ResponseInput;
}

export function toGeminiHistory(conversations: Conversations[]): Content[] {
  if (conversations.length <= 1) {
    return []; 
  }

  const priorConversations = conversations.slice(0, -1);
  const history: Content[] = priorConversations.map((conversation) => {
    return {
      role: conversation.role === "user" ? "user" : "model",
      parts: [{ text: conversation.content }],
    };
  });

  return history;
}
