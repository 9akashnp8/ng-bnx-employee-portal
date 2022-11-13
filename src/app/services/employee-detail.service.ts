import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {
  private apiUrl = 'http://127.0.0.1:8000/api/employee/'

  constructor(private http: HttpClient) { }

  getEmployeeDetail(): Observable<Employee> {
    return this.http.get<Employee>(this.apiUrl);
  }
}
