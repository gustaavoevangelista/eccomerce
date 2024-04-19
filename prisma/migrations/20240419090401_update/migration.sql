/*
  Warnings:

  - Added the required column `discount` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalPriceInCents` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricePaidInCents` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `discount` INTEGER NOT NULL,
    ADD COLUMN `originalPriceInCents` INTEGER NOT NULL,
    ADD COLUMN `pricePaidInCents` INTEGER NOT NULL;
