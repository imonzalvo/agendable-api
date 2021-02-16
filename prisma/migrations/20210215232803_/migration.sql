-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('COMPLETED', 'CONFIRMED', 'PENDING', 'CANCELLED');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('ADMIN', 'USER', 'GUEST');

-- CreateEnum
CREATE TYPE "Day" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateTable
CREATE TABLE "AvailabilityItem" (
    "id" TEXT NOT NULL,
    "day" "Day" NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VacationsItem" (
    "id" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "start" TEXT NOT NULL,
    "end" TEXT NOT NULL,
    "status" "BookingStatus" NOT NULL,
    "clientId" TEXT,
    "branchId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "clientEmail" TEXT,
    "clientPhone" TEXT,
    "clientName" TEXT,
    "clientFamilyName" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "givenName" TEXT NOT NULL,
    "familyName" TEXT NOT NULL,
    "userId" TEXT,
    "phone" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "currency" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "categoryId" TEXT,
    "businessId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Branch" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "businessId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "businessId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Business" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "handle" TEXT NOT NULL,
    "website" TEXT,
    "instagramUrl" TEXT,
    "facebookUrl" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessImage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "landingInfoId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandingInfo" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "cta" TEXT,
    "description" TEXT NOT NULL,
    "businessId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "seen" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL DEFAULT E'',
    "givenName" TEXT NOT NULL,
    "familyName" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userType" "UserType" NOT NULL,
    "verifyToken" TEXT NOT NULL DEFAULT E'',
    "phone" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "authorId" TEXT,
    "content" TEXT,
    "id" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookingToService" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EmployeeToService" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BranchToEmployee" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BranchToService" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BranchToCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Business.email_unique" ON "Business"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Business.phone_unique" ON "Business"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Business.handle_unique" ON "Business"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Business_ownerId_unique" ON "Business"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "LandingInfo_businessId_unique" ON "LandingInfo"("businessId");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User.phone_unique" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "_BookingToService_AB_unique" ON "_BookingToService"("A", "B");

-- CreateIndex
CREATE INDEX "_BookingToService_B_index" ON "_BookingToService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EmployeeToService_AB_unique" ON "_EmployeeToService"("A", "B");

-- CreateIndex
CREATE INDEX "_EmployeeToService_B_index" ON "_EmployeeToService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BranchToEmployee_AB_unique" ON "_BranchToEmployee"("A", "B");

-- CreateIndex
CREATE INDEX "_BranchToEmployee_B_index" ON "_BranchToEmployee"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BranchToService_AB_unique" ON "_BranchToService"("A", "B");

-- CreateIndex
CREATE INDEX "_BranchToService_B_index" ON "_BranchToService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BranchToCategory_AB_unique" ON "_BranchToCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_BranchToCategory_B_index" ON "_BranchToCategory"("B");

-- AddForeignKey
ALTER TABLE "AvailabilityItem" ADD FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VacationsItem" ADD FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Branch" ADD FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business" ADD FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessImage" ADD FOREIGN KEY ("landingInfoId") REFERENCES "LandingInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandingInfo" ADD FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookingToService" ADD FOREIGN KEY ("A") REFERENCES "Booking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookingToService" ADD FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToService" ADD FOREIGN KEY ("A") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToService" ADD FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BranchToEmployee" ADD FOREIGN KEY ("A") REFERENCES "Branch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BranchToEmployee" ADD FOREIGN KEY ("B") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BranchToService" ADD FOREIGN KEY ("A") REFERENCES "Branch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BranchToService" ADD FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BranchToCategory" ADD FOREIGN KEY ("A") REFERENCES "Branch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BranchToCategory" ADD FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
