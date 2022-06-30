import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/configs/prisma.service";
import employeeEntity from "src/entities/employee.entity";
import IEmployeeRepository from "./employee.repository.contract";

@Injectable()
export class EmployeeRepository implements IEmployeeRepository {
  constructor(
    private readonly repository: PrismaService
  ) {}
  
  create(data: employeeEntity): Promise<employeeEntity> {
    return this.repository.employee.create({
      data: {
        id: data.id,
        email: data.email,
        name: data.name,
        occupation: data.occupation
      }
    })
  }
}
