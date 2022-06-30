import Evidence from "src/entities/evidence.entity";

export default interface IEvidenceRepository {
  create(data: Evidence): Promise<Evidence>
}
