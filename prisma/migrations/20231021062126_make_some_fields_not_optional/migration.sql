/*
  Warnings:

  - Made the column `createdAt` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isArchived` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isArchived` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "isArchived" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "isArchived" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;
