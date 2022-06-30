import { Module } from "@nestjs/common";
import { EvidenceController } from "src/controllers/evidence.controller";
import { EvidenceRepository } from "src/repositories/evidence/evidence.repository";
import { EvidenceService } from "src/services/evidence.service";
import { RepositoryModule } from "./repository.module";

@Module({
  imports: [RepositoryModule],
  controllers: [EvidenceController],
  providers: [
    EvidenceService,
    {
      provide: "IEvidenceRepository",
      useClass: EvidenceRepository
    }
  ]
})

export class EvidenceModule {}
