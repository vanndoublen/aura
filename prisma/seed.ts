import { PrismaClient, Prisma } from "@/generated/prisma";

const prisma = new PrismaClient();

const modelData: Prisma.AiModelCreateInput[] = [
  {
    name: "gpt-4.1",
    provider: "OpenAI",
    displayName: "GPT 4.1",
    description:
      "GPT-4.1 is our flagship model for complex tasks. It is well suited for problem solving across domains.",
    maxTokens: 4096,
    temperature: 0.7,
    isActive: true,
  },
  {
    name: "gemini-2.5-flash",
    provider: "Gemini",
    displayName: "Gemini 2.5 flash",
    description: "Adaptive thinking, cost efficiency",
    maxTokens: 4096,
    temperature: 0.7,
    isActive: true,
  },
  {
    name: "o4-mini",
    provider: "OpenAI",
    displayName: "GPT o4 mini",
    description:
      "Optimized for fast, effective reasoning with exceptionally efficient performance in coding and visual tasks.",
    maxTokens: 4096,
    temperature: 0.7,
    isActive: true,
  },
  {
    name: "deepseek-chat",
    provider: "DeepSeek",
    displayName: "DeepSeek",
    description:
      "Deepseek chat with non-thinking Mode",
    maxTokens: 4096,
    temperature: 0.7,
    isActive: true,
  },
];

export async function main() {
  console.log("Start seeding...");
  try {
    for (const m of modelData) {
      await prisma.aiModel.upsert({
        where: { name: m.name },
        update: {},
        create: m,
      });
      console.log(`Upserted model: ${m.name}`);
    }
  } catch (e) {
    console.error(e);
    process.exit(1); // Exit with error code if something goes wrong
  } finally {
    await prisma.$disconnect(); // Ensure disconnection
  }
  console.log("Seeding finished.");
}

main();
