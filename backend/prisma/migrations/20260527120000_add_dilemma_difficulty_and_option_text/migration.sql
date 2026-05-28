-- AlterTable
ALTER TABLE `Dilemma` ADD COLUMN `difficulty` VARCHAR(191) NOT NULL DEFAULT 'EASY';

-- AlterTable
ALTER TABLE `Option` MODIFY `text` TEXT NOT NULL;
