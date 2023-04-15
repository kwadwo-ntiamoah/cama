-- CreateEnum
CREATE TYPE "RequestType" AS ENUM ('PRAYER', 'TESTIMONY');

-- CreateTable
CREATE TABLE "testimonies" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "requestType" "RequestType" NOT NULL,

    CONSTRAINT "testimonies_pkey" PRIMARY KEY ("id")
);
