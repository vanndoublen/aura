import OpenAI from "openai";
import { GoogleGenAI } from "@google/genai";
import { Responses } from "openai/resources/index.mjs";
import {
  Conversations,
  toDeepseekAiHistory,
  toGeminiHistory,
  toOpenAiHistory,
} from "./utils";

// TODO: use proper provider type
// type ModelProvider = "OpenAI" | "Anthropic";

export const streamAIResponse = async function* (args: {
  provider: string;
  model: string;
  message: Conversations[];
}) {
  const { provider, model, message } = args;

  switch (provider) {
    case "OpenAI":
      yield* streamOpenAiResponse(model, message);
      break;

    case "Gemini":
      yield* streamGeminiResponse(model, message);
      break;

    case "DeepSeek":
      yield* streamDeepseekResponse(model, message);
      break;

    default:
      throw new Error(`unknown provider: ${provider}`);
  }
};

async function* streamOpenAiResponse(model: string, message: Conversations[]) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const conversations = toOpenAiHistory(message);

  const events = await openai.responses.create({
    model,
    input: conversations,
    stream: true,
    reasoning: model === "o4-mini" ? { effort: "low" } : {},
  });

  for await (const event of events) {
    if (event.type === "response.output_text.delta") {
      yield event.delta;
    }
  }
}

async function* streamGeminiResponse(model: string, message: Conversations[]) {
  const googleAi = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  const conversations = toGeminiHistory(message);

  const chat = googleAi.chats.create({
    model,
    history: conversations,
    config: {
      systemInstruction:
        "You are a helpful and concise assistant. Make sure the response is neat and precise.",
    },
  });

  try {
    const events = await chat.sendMessageStream({
      message: message[message.length - 1].content,
    });

    for await (const chunk of events) {
      yield chunk.text;
    }
  } catch (error) {
    console.error("Gemini Stream Error:", error);
    throw error;
  }
}

async function* streamDeepseekResponse(
  model: string,
  message: Conversations[],
) {
  const openai = new OpenAI({
    baseURL: "https://api.deepseek.com",
    apiKey: process.env.DEEPSEEK_API_KEY,
  });

  const conversations = toDeepseekAiHistory(message);

  const events = await openai.chat.completions.create({
    model,
    messages: conversations,
    stream: true,
  });

  for await (const event of events) {
    yield event.choices[0].delta.content;
  }
}
