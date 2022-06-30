import { Module } from "@nestjs/common";
import { DescriptiveReportController } from "src/controllers/descriptiveReport.controller";
import { DescriptiveReportRepository } from "src/repositories/descriptiveReport/descriptiveReport.repository";
import { DescriptiveReportService } from "src/services/descriptiveReport.service";
import { RepositoryModule } from "./repository.module";

@Module({
  imports: [RepositoryModule],
  controllers: [DescriptiveReportController],
  providers: [
    DescriptiveReportService,
    {
      provide: "IDescriptiveReportRepository",
      useClass: DescriptiveReportRepository
    }
  ]
})

export class DescriptiveReportModule {}
