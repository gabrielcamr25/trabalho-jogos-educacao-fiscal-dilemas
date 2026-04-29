/*
  Warnings:

  - Added the required column `cityName` to the `Leaderboard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Leaderboard` ADD COLUMN `cityName` VARCHAR(191) NOT NULL;
