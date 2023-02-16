/*
  Warnings:

  - Made the column `type` on table `Space` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Space" ALTER COLUMN "type" SET NOT NULL,
ALTER COLUMN "type" SET DEFAULT 'PRIVATE';
