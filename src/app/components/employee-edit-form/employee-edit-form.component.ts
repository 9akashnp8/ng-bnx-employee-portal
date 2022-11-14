import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
 
@Component({
  selector: 'app-employee-edit-form',
  templateUrl: './employee-edit-form.component.html',
  styleUrls: ['./employee-edit-form.component.css']
})
export class EmployeeEditFormComponent implements OnInit {
  id: string;
  employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!
    })
    this.employeeService.getEmployee(this.id!).subscribe((employee) => {
      this.employee = employee;
    })
  }

  handleSubmit(id: string) {
    const payload = {
      employee_code: this.employee.employee_code,
      first_name: this.employee.first_name,
      last_name: this.employee.last_name,
      email: this.employee.email,
      phone: this.employee.phone,
      department: this.employee.department,
      designation: this.employee.designation,
      branch: this.employee.branch,
      salary: this.employee.salary,
      date_of_joining: this.employee.date_of_joining,
      date_of_exit: this.employee.date_of_exit,
      is_active: this.employee.is_active,
    }
    this.employeeService.updateEmployee(id, payload).subscribe((employee) => {
      this.router.navigate(['/employee', employee.id])
    })
  }

}
