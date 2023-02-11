/*
  Warnings:

  - Added the required column `slug` to the `Folder` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Folder` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `Space` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Space` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Folder" ADD COLUMN     "slug" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Space" ALTER COLUMN "slug" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
