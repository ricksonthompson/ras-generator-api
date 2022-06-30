import Ras from "src/entities/ras.entity";

export default interface IRasRepository {
  create(data: Ras): Promise<Ras>
}
