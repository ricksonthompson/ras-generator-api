import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateDescriptiveReportDTO } from "src/dtos/descriptiveReport/createDescriptiveReport.dto";
import { CreateProjectDTO } from "src/dtos/project/createProject.dto";
import DescriptiveReport from "src/entities/descriptiveReport.entity";
import { DescriptiveReportService } from "src/services/descriptiveReport.service";

@Controller('/api/descriptiveReports')
export class DescriptiveReportController {
  constructor(
    private readonly descriptiveReportService: DescriptiveReportService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() payload: CreateDescriptiveReportDTO): Promise<DescriptiveReport> {
    return this.descriptiveReportService.create(payload)
  }
}
