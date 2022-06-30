import { v4 as uuid } from 'uuid'
import Ras from './ras.entity'

export default class Project {
  id: string
  title: string
  ras?: Ras
  createdAt: Date
  updatedAt?: Date

  constructor(
    props: Omit<Project, 'id' | 'createdAt' | 'ras'>,
    ras?: Ras,
    id?: string
  ) {
    Object.assign(this, props)

    if (!id) this.id = uuid()
    this.ras = ras
  }
}
