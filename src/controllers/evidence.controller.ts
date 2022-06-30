import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateEvidenceDTO } from "src/dtos/evidence/createEvidence.dto";
import Evidence from "src/entities/evidence.entity";
import { EvidenceService } from "src/services/evidence.service";

@Controller('/api/evidences')
export class EvidenceController {
  constructor(
    private readonly evidenceService: EvidenceService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() payload: CreateEvidenceDTO): Promise<Evidence> {
    return this.evidenceService.create(payload)
  }
}
