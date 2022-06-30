import { Inject, Injectable } from "@nestjs/common";
import { CreateEmployeeDTO } from "src/dtos/employee/createEmployee.dto";
import Employee from "src/entities/employee.entity";
import IEmployeeRepository from "src/repositories/employee/employee.repository.contract";

@Injectable()
export class EmployeeService {
  constructor(
    @Inject("IEmployeeRepository")
    private readonly repository: IEmployeeRepository
  ) {}

  async create(props: CreateEmployeeDTO): Promise<Employee> {
    return this.repository.create(new Employee(props))
  }
}
