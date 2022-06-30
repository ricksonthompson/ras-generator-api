import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/configs/prisma.service";
import DescriptiveReport from "src/entities/descriptiveReport.entity";
import IDescriptiveReportRepository from "./descriptiveReport.repository.contract";

@Injectable()
export class DescriptiveReportRepository implements IDescriptiveReportRepository {
  constructor(
    private readonly repository: PrismaService
  ) {}

  create(data: DescriptiveReport): Promise<DescriptiveReport> {
    return this.repository.descriptiveReport.create({
      data: {
        id: data.id,
        description: data.description,
        evidence: {
          connect: {
            id: data.evidence.id
          }
        }
      }
    })
  }
}
