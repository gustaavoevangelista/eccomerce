/*
  Warnings:

  - Added the required column `filePath` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagePath` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `filePath` VARCHAR(191) NOT NULL,
    ADD COLUMN `imagePath` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `isAvailable` BOOLEAN NOT NULL DEFAULT false;
