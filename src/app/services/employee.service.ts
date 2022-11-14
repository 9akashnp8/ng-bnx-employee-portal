import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://ng-bnx.akashnp.dev/api/employee/'

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<Employee[]>  {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(`https://ng-bnx.akashnp.dev/api/employee/${id}`)
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  updateEmployeeSalary(id: string, payload: Object): Observable<Employee> {
    return this.http.patch<Employee>(`https://ng-bnx.akashnp.dev/api/employee/${id}/`, payload)
  }

  updateEmployee(id: string, payload: Object): Observable<Employee> {
    return this.http.put<Employee>(`https://ng-bnx.akashnp.dev/api/employee/${id}/`, payload)
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(`https://ng-bnx.akashnp.dev/api/employee/${id}/`)
  }
}
