import { v4 as uuid } from 'uuid'
import Ras from './ras.entity'

export default class Employee {
  id: string
  name: string
  email: string
  occupation: string
  ras?: Ras
  createdAt: Date
  updatedAt?: Date

  constructor(
    props: Omit<Employee, 'id' | 'createdAt' | 'ras'>,
    ras?: Ras,
    id?: string
  ) {
    Object.assign(this, props)

    if (!id) this.id = uuid()
    this.ras = ras
  }
}
