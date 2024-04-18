/*
  Warnings:

  - You are about to drop the `_ordertoproduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productID` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_ordertoproduct` DROP FOREIGN KEY `_OrderToProduct_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ordertoproduct` DROP FOREIGN KEY `_OrderToProduct_B_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_userID_fkey`;

-- AlterTable
ALTER TABLE `order` ADD COLUMN `productID` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_ordertoproduct`;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_productID_fkey` FOREIGN KEY (`productID`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
