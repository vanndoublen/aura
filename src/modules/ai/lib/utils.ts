import { CHAT_TITLE_PROMPT } from "@/prompt";
import { Content } from "@google/genai";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions.mjs";
import { Responses } from "openai/resources/index.mjs";

export interface Conversations {
  role: string;
  content: string;
}

export async function createTitle(userMessage: string) {
  const openai = new OpenAI({  baseURL: 'https://api.deepseek.com', apiKey: process.env.DEEPSEEK_API_KEY });

  const response = await openai.chat.completions.create({
    model: "deepseek-chat",
    messages: [
      { role: "system", content: CHAT_TITLE_PROMPT },
      { role: "user", content: userMessage },
    ],
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

export function toDeepseekAiHistory(
  conversations: Conversations[]
): ChatCompletionMessageParam[] {
  return conversations as ChatCompletionMessageParam[];
}
