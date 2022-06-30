-- CreateTable
CREATE TABLE "Banner" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP
);

-- CreateTable
CREATE TABLE "DescriptiveReport" (
    "id" UUID NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP
);

-- CreateTable
CREATE TABLE "Evidence" (
    "id" UUID NOT NULL,
    "bannerId" UUID NOT NULL,
    "description" TEXT NOT NULL,
    "descriptiveReportId" UUID NOT NULL,
    "rasId" UUID,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP
);

-- CreateTable
CREATE TABLE "Project" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP
);

-- CreateTable
CREATE TABLE "Ras" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "projectId" UUID NOT NULL,
    "technicalCoordinator" TEXT NOT NULL,
    "employeeId" UUID NOT NULL,
    "period" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Banner_id_key" ON "Banner"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DescriptiveReport_id_key" ON "DescriptiveReport"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_id_key" ON "Employee"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Evidence_id_key" ON "Evidence"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Evidence_bannerId_key" ON "Evidence"("bannerId");

-- CreateIndex
CREATE UNIQUE INDEX "Evidence_descriptiveReportId_key" ON "Evidence"("descriptiveReportId");

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ras_id_key" ON "Ras"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ras_employeeId_key" ON "Ras"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Ras_projectId_key" ON "Ras"("projectId");

-- AddForeignKey
ALTER TABLE "Evidence" ADD CONSTRAINT "Evidence_bannerId_fkey" FOREIGN KEY ("bannerId") REFERENCES "Banner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evidence" ADD CONSTRAINT "Evidence_descriptiveReportId_fkey" FOREIGN KEY ("descriptiveReportId") REFERENCES "DescriptiveReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evidence" ADD CONSTRAINT "Evidence_rasId_fkey" FOREIGN KEY ("rasId") REFERENCES "Ras"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ras" ADD CONSTRAINT "Ras_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ras" ADD CONSTRAINT "Ras_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
