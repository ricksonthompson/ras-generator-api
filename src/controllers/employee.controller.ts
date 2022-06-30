import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateEmployeeDTO } from "src/dtos/employee/createEmployee.dto";
import Employee from "src/entities/employee.entity";
import { EmployeeService } from "src/services/employee.service";

@Controller('/api/employees')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() payload: CreateEmployeeDTO): Promise<Employee> {
    return this.employeeService.create(payload)
  }
}
