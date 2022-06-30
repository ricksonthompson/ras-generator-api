import { Module } from "@nestjs/common";
import { EmployeeController } from "src/controllers/employee.controller";
import { EmployeeRepository } from "src/repositories/employee/employee.repository";
import { EmployeeService } from "src/services/employee.service";
import { RepositoryModule } from "./repository.module";

@Module({
  imports: [RepositoryModule],
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    {
      provide: "IEmployeeRepository",
      useClass: EmployeeRepository
    }
  ]
})

export class EmployeeModule {}
