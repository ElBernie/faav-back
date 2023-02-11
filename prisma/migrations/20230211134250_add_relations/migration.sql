/*
  Warnings:

  - Added the required column `space` to the `Folder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `UserLink` table without a default value. This is not possible if the table is not empty.
  - Added the required column `space` to the `UserLink` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `UserLink` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Folder" ADD COLUMN     "space" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Space" ADD COLUMN     "owner" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserLink" ADD COLUMN     "folder" INTEGER,
ADD COLUMN     "link" INTEGER NOT NULL,
ADD COLUMN     "space" INTEGER NOT NULL,
ADD COLUMN     "user" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "UserLink" ADD CONSTRAINT "UserLink_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLink" ADD CONSTRAINT "UserLink_link_fkey" FOREIGN KEY ("link") REFERENCES "Link"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLink" ADD CONSTRAINT "UserLink_space_fkey" FOREIGN KEY ("space") REFERENCES "Space"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLink" ADD CONSTRAINT "UserLink_folder_fkey" FOREIGN KEY ("folder") REFERENCES "Folder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_space_fkey" FOREIGN KEY ("space") REFERENCES "Space"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Space" ADD CONSTRAINT "Space_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
