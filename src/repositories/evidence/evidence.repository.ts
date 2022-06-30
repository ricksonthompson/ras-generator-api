import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/configs/prisma.service";
import evidenceEntity from "src/entities/evidence.entity";
import IEvidenceRepository from "./evidence.repository.contract";

@Injectable()
export class EvidenceRepository implements IEvidenceRepository {
  constructor(
    private readonly repository: PrismaService
  ) {}
  
  create(data: evidenceEntity): Promise<evidenceEntity> {
    throw new Error("Method not implemented.");
  }
}
