import { v4 as uuid } from 'uuid'
import DescriptiveReport from './descriptiveReport.entity'

export default class Evidence {
  id: string
  description: string
  descriptiveReport?: DescriptiveReport
  createdAt: Date
  updatedAt?: Date

  constructor(
    props: Omit<Evidence, 'id' | 'createdAt' | 'descriptiveReport' | 'banner'>,
    descriptiveReport?: DescriptiveReport,
    id?: string
  ) {
    Object.assign(this, props)

    if (!id) this.id = uuid()
    this.descriptiveReport = descriptiveReport
  }
}
