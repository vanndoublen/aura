import OpenAI from "openai";
import { GoogleGenAI } from "@google/genai";
import { Responses } from "openai/resources/index.mjs";
import { Conversations, toGeminiHistory, toOpenAiHistory } from "./utils";

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
    reasoning: model === "o4-mini" ? {effort: "low"} : {}
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
        "You are a helpful and concise assistant. Make sure the response is short and precise.",
    },
  });

  const events = await chat.sendMessageStream({
    message: message[message.length - 1].content,
  });

  for await (const chunk of events) {
    yield chunk.text;
  }
}
