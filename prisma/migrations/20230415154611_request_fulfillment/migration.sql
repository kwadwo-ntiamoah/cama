/*
  Warnings:

  - Added the required column `fulfilled` to the `testimonies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `testimonies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "testimonies" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fulfilled" BOOLEAN NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
