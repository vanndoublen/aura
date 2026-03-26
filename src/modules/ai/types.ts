export interface BaseAiResponse {
  id: string;
  content: string;
  model: string;
}

export interface OpenAiResponse extends BaseAiResponse {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
}

export interface GeminiResponse extends BaseAiResponse{
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
}

export interface ClaudeResponse extends BaseAiResponse{
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
}

export interface AiProvider<T extends BaseAiResponse = BaseAiResponse> {
  name: string;
  createResponse(input: string, model: string, instructions?: string): Promise<T>;
}

export type AiResponse = OpenAiResponse | GeminiResponse | ClaudeResponse;
