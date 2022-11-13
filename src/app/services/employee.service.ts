import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../Employee';
import { EMPLOYEES } from 'src/app/mock-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Observable<Employee[]>  {
    const employees = of(EMPLOYEES);
    return employees;
  }
}