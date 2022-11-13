import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  constructor(private http: HttpClient) { }

  getEmployeeDetail(id: string): Observable<Employee> {
    return this.http.get<Employee>(`http://127.0.0.1:8000/api/employee/${id}`);
  }
}
