import { Module } from "@nestjs/common";
import { RasController } from "src/controllers/ras.controller";
import { RasRepository } from "src/repositories/ras/ras.repository";
import { RasService } from "src/services/ras.service";
import { RepositoryModule } from "./repository.module";

@Module({
  imports: [RepositoryModule],
  controllers: [RasController],
  providers: [
    RasService,
    {
      provide: "IRasRepository",
      useClass: RasRepository
    }
  ]
})

export class RasModule {}
