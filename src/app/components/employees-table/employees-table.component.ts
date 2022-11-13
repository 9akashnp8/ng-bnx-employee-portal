import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from 'src/app/mock-employees';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {
  employees: Employee[] = EMPLOYEES;

  constructor() { }

  ngOnInit(): void {
  }

}
