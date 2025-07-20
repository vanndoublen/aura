import prisma from "@/lib/db";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "@/trpc/init";

export const aiRouter = createTRPCRouter({
    getMany: baseProcedure
        .query(async () => {
            const aiModels = prisma.aiModel.findMany({
                // TODO: reconsider allow for ui
                where: {
                    isActive: true,
                }
            })
            return aiModels; 
        })
})