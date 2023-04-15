/*
  Warnings:

  - You are about to drop the column `packageId` on the `benefits` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "benefits" DROP CONSTRAINT "benefits_packageId_fkey";

-- AlterTable
ALTER TABLE "benefits" DROP COLUMN "packageId";

-- AlterTable
ALTER TABLE "packages" ADD COLUMN     "benefits" TEXT[];
