import { Inject, Injectable } from "@nestjs/common";
import { CreateEvidenceDTO } from "src/dtos/evidence/createEvidence.dto";
import Evidence from "src/entities/evidence.entity";
import IEvidenceRepository from "src/repositories/evidence/evidence.repository.contract";

@Injectable()
export class EvidenceService {
  constructor(
    @Inject("IEvidenceRepository")
    private readonly repository: IEvidenceRepository
  ) {}

  async create(props: CreateEvidenceDTO): Promise<Evidence> {
    return this.repository.create(new Evidence({
      description: "rs]e0"
    }))
  }
}
