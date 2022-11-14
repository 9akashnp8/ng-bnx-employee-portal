import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-salary-form',
  templateUrl: './employee-salary-form.component.html',
  styleUrls: ['./employee-salary-form.component.css']
})
export class EmployeeSalaryFormComponent implements OnInit {
  id: string = sessionStorage.getItem('id')!;
  employee_code: string;
  first_name: string;
  salary: number;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.employeeService.getEmployee(this.id).subscribe((employee) => {
      this.employee_code = employee.employee_code;
      this.first_name = employee.first_name;
    })
  }

  handleSubmit() {
    const salaryPayload = {
      salary: this.salary
    }

    this.employeeService.updateEmployeeSalary(this.id, salaryPayload).subscribe((employee) => {
      this.router.navigate(['/employee', employee.id]);
    })

    sessionStorage.clear();
  }

}
