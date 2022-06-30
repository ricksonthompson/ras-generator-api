import { Inject, Injectable } from "@nestjs/common";
import { CreateDescriptiveReportDTO } from "src/dtos/descriptiveReport/createDescriptiveReport.dto";
import DescriptiveReport from "src/entities/descriptiveReport.entity";
import Evidence from "src/entities/evidence.entity";
import IDescriptiveReportRepository from "src/repositories/descriptiveReport/descriptiveReport.repository.contract";

@Injectable()
export class DescriptiveReportService {
  constructor(
    @Inject("IDescriptiveReportRepository")
    private readonly repository: IDescriptiveReportRepository
  ) {}

  async create(props: CreateDescriptiveReportDTO): Promise<DescriptiveReport> {
    const evidence = new Evidence({
      description: "test"
    })
    return this.repository.create(new DescriptiveReport({...props}, evidence))
  }
}
