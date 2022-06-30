import { Inject, Injectable } from "@nestjs/common";
import { CreateProjectDTO } from "src/dtos/project/createProject.dto";
import Project from "src/entities/project.entity";
import IProjectRepository from "src/repositories/project/project.repository.contract";

@Injectable()
export class ProjectService {
  constructor(
    @Inject("IProjectRepository")
    private readonly repository: IProjectRepository
  ) {}

  async create(props: CreateProjectDTO): Promise<Project> {
    return this.repository.create(new Project(props))
  }
}
