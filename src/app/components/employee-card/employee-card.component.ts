import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeeDetailService } from 'src/app/services/employee-detail.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {
  employee: Employee;

  constructor(private employeeDetailService: EmployeeDetailService) { }

  ngOnInit(): void {
    this.employeeDetailService.getEmployeeDetail().subscribe((employee) => this.employee = employee)
  }

}
