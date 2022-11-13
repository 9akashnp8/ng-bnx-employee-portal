import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeeDetailService } from 'src/app/services/employee-detail.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {
  id: string;
  employee: Employee;

  constructor(private employeeDetailService: EmployeeDetailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')!
    })
    this.employeeDetailService.getEmployeeDetail(this.id).subscribe((employee) => this.employee = employee);  
  }

}
