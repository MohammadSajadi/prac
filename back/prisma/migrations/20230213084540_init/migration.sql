/*
  Warnings:

  - You are about to drop the `Bike` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LostAndDamageReport` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reservation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Return` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bike" DROP CONSTRAINT "Bike_locationId_fkey";

-- DropForeignKey
ALTER TABLE "LostAndDamageReport" DROP CONSTRAINT "LostAndDamageReport_bikeId_fkey";

-- DropForeignKey
ALTER TABLE "LostAndDamageReport" DROP CONSTRAINT "LostAndDamageReport_userId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_bikeId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_userId_fkey";

-- DropForeignKey
ALTER TABLE "Return" DROP CONSTRAINT "Return_bikeId_fkey";

-- DropForeignKey
ALTER TABLE "Return" DROP CONSTRAINT "Return_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Return" DROP CONSTRAINT "Return_userId_fkey";

-- DropTable
DROP TABLE "Bike";

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "LostAndDamageReport";

-- DropTable
DROP TABLE "Reservation";

-- DropTable
DROP TABLE "Return";

-- DropEnum
DROP TYPE "BikeStatus";

-- DropEnum
DROP TYPE "ReportStatus";

-- DropEnum
DROP TYPE "ReservationStatus";
