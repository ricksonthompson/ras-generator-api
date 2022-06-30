import DescriptiveReport from "src/entities/descriptiveReport.entity";

export default interface IDescriptiveReportRepository {
  create(data: DescriptiveReport): Promise<DescriptiveReport>
}
