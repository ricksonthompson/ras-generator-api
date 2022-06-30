import Project from "src/entities/project.entity";

export default interface IProjectRepository {
  create(data: Project): Promise<Project>
}
