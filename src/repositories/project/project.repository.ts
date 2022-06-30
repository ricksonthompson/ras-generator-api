import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { Pageable } from "src/configs/pageable.service";
import { PrismaService } from "src/configs/prisma.service";
import Project from "src/entities/project.entity";
import IProjectRepository from "./project.repository.contract";

@Injectable()
export class ProjectRepository extends Pageable<Project> implements IProjectRepository {
  constructor(
    private readonly repository: PrismaService
  ) {
    super()
  }

  create(data: Project): Promise<Project> {
    return this.repository.project.create({
      data: {
        ...data
      }
    })
  }
}
