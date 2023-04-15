/*
  Warnings:

  - You are about to drop the `testimonies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "testimonies";

-- CreateTable
CREATE TABLE "requests" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fullname" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "fulfilled" BOOLEAN NOT NULL,
    "requestType" "RequestType" NOT NULL,

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);
