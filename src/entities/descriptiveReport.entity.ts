import { v4 as uuid } from 'uuid'
import Evidence from './evidence.entity'

export default class DescriptiveReport {
  id: string
  description: string
  evidence?: Evidence
  createdAt: Date
  updatedAt?: Date

  constructor(
    props: Omit<DescriptiveReport, 'id' | 'createdAt' | 'evidence'>,
    evidence: Evidence,
    id?: string
  ) {
    Object.assign(this, props)

    if (!id) this.id = uuid()
    this.evidence = evidence
  }
}
