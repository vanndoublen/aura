// src/lib/ai/service.ts
import { providers, type ProviderName, type ProviderResponseMap } from "./providers";

export class AiService {
  static async createResponse<T extends ProviderName>(
    input: string,
    providerName: T,
    modelName: string,
    instructions?: string, 
  ): Promise<ProviderResponseMap[T]> {
    const provider = providers[providerName];
    
    if (!provider) {
      throw new Error(`Provider ${providerName} not found`);
    }

    return provider.createResponse(input, modelName, instructions) as Promise<ProviderResponseMap[T]>;
  }
}