/*
  Warnings:

  - You are about to drop the column `completionTokens` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `promptTokens` on the `Message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "completionTokens",
DROP COLUMN "promptTokens",
ADD COLUMN     "inputTokens" INTEGER,
ADD COLUMN     "outputTokens" INTEGER;
