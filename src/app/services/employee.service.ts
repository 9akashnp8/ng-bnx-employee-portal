import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://127.0.0.1:8000/api/employee/'

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<Employee[]>  {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  getEmployeeForSalaryUpdate(id: string): Observable<Employee> {
    return this.http.get<Employee>(`http://127.0.0.1:8000/api/employee/${id}`)
  }

  updateEmployeeSalary(id: string, payload: Object): Observable<Employee> {
    return this.http.patch<Employee>(`http://127.0.0.1:8000/api/employee/${id}/`, payload)
  }
}
