import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateProjectDTO } from "src/dtos/project/createProject.dto";
import Project from "src/entities/project.entity";
import { ProjectService } from "src/services/project.service";

@Controller('/api/projects')
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() payload: CreateProjectDTO): Promise<Project> {
    return this.projectService.create(payload)
  }
}
