import { CHAT_TITLE_PROMPT } from "@/prompt";
import OpenAI from "openai";

export async function createTitle( userMessage: string ) {

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const response = await openai.responses.create({
    model: "gpt-4.1-nano",
    input: userMessage,
    instructions: CHAT_TITLE_PROMPT,
  });

  return response;
}
