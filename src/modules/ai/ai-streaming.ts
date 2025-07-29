import OpenAI from "openai";

// TODO: use proper provider type
// type ModelProvider = "OpenAI" | "Anthropic";

export const streamAIResponse = async function* (args: {
  provider: string;
  model: string;
  message: string;
}) {
  const { provider, model, message } = args;

  switch (provider) {
    case "OpenAI":
      yield* streamOpenAiResponse(model, message);
      break;
    default:
      throw new Error(`unknown provider: ${provider}`);
  }
};

async function* streamOpenAiResponse(model: string, message: string) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const events = await openai.responses.create({
    model,
    input: message,
    stream: true,
  });

  for await (const event of events) {
    if (event.type === "response.output_text.delta") {
      yield event.delta;
    }
  }
}
