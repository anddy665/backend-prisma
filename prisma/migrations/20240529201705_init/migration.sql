/*
  Warnings:

  - You are about to drop the column `course_id` on the `Coach` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Coach` DROP FOREIGN KEY `Coach_course_id_fkey`;

-- AlterTable
ALTER TABLE `Coach` DROP COLUMN `course_id`;
