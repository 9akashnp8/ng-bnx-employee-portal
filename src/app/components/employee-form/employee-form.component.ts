import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee_code: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  branch: string;
  date_of_joining: string;
  date_of_exit?: string;
  is_active: boolean = true;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    const newEmployee = {
      employee_code: this.employee_code,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      phone: this.phone,
      department: this.department,
      designation: this.designation,
      branch: this.branch,
      date_of_joining: this.date_of_joining,
      date_of_exit: this.date_of_exit,
      is_active: this.is_active,
    }

    this.employeeService.addEmployee(newEmployee).subscribe((employee) => {
      sessionStorage.setItem('id', employee.id!);
      this.router.navigate(['/employee/add', 'salary'])
    });

  }

}
