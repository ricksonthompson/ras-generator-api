import Employee from "src/entities/employee.entity";

export default interface IEmployeeRepository {
  create(data: Employee): Promise<Employee>
}
