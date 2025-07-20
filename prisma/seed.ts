import { PrismaClient, Prisma } from "@/generated/prisma";

const prisma = new PrismaClient();

const modelData: Prisma.AiModelCreateInput[] = [
  {
    name: "gpt-4.1",
    provider: "OpenAI",
    displayName: "GPT 4.1", 
    description: "GPT-4.1 is our flagship model for complex tasks. It is well suited for problem solving across domains.",
    maxTokens: 4096,
    temperature: 0.7,
    isActive: true,
  },
];

export async function main() {
  console.log('Start seeding...');
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
  console.log('Seeding finished.');
}

main();
