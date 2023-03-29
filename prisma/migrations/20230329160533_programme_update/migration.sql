/*
  Warnings:

  - Added the required column `description` to the `programmes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `programmes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `programmes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "programmes" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
