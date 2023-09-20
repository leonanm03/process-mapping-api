/*
  Warnings:

  - Made the column `areaId` on table `processes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "processes" DROP CONSTRAINT "processes_areaId_fkey";

-- DropForeignKey
ALTER TABLE "processes" DROP CONSTRAINT "processes_fatherProcessId_fkey";

-- AlterTable
ALTER TABLE "processes" ALTER COLUMN "areaId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "processes" ADD CONSTRAINT "processes_fatherProcessId_fkey" FOREIGN KEY ("fatherProcessId") REFERENCES "processes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "processes" ADD CONSTRAINT "processes_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "areas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
