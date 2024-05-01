/*
  Warnings:

  - You are about to drop the column `priceInEuros` on the `product` table. All the data in the column will be lost.
  - Added the required column `priceInCents` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `priceInEuros`,
    ADD COLUMN `priceInCents` DOUBLE NOT NULL;
