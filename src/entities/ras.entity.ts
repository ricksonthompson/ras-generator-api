import DescriptiveReport from './descriptiveReport.entity'
import Employee from './employee.entity'
import Evidence from './evidence.entity'
import Project from './project.entity'
import { v4 as uuid } from 'uuid'

export default class Ras {
  id: string
  title: string
  project: Project
  technicalCoordinator: string
  employee: Employee
  period: string
  evidence: Evidence[]
  createdAt: Date
  updatedAt?: Date

  constructor(
    props: Omit<Ras, 'id' | 'createdAt' | 'employee' | 'project' | 'evidence'>,
    project: Project,
    employee: Employee,
    evidence?: Evidence[],
    id?: string
  ) {
    Object.assign(this, props)

    if (!id) this.id = uuid()

    this.project = project
    this.employee = employee
    this.evidence = evidence
  }
}
