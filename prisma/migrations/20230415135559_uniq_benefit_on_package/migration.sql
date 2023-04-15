/*
  Warnings:

  - You are about to drop the column `benefits` on the `packages` table. All the data in the column will be lost.
  - Added the required column `packageId` to the `benefits` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "benefits" ADD COLUMN     "packageId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "packages" DROP COLUMN "benefits";

-- AddForeignKey
ALTER TABLE "benefits" ADD CONSTRAINT "benefits_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
