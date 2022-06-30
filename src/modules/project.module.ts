import { Module } from "@nestjs/common";
import { ProjectController } from "src/controllers/project.controller";
import { ProjectRepository } from "src/repositories/project/project.repository";
import { ProjectService } from "src/services/project.service";
import { RepositoryModule } from "./repository.module";

@Module({
  imports: [RepositoryModule],
  controllers: [ProjectController],
  providers: [
    ProjectService,
    {
      provide: "IProjectRepository",
      useClass: ProjectRepository
    }
  ],
  exports: [ProjectService]
})

export class ProjectModule {}
