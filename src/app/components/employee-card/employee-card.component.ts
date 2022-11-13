import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeeDetailService } from 'src/app/services/employee-detail.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {
  id: string;
  employee: Employee;

  constructor(
    private employeeDetailService: EmployeeDetailService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')!
    })
    this.employeeDetailService.getEmployeeDetail(this.id).subscribe((employee) => this.employee = employee);  
  }

  handleEdit(id: string) {
    console.log(id);
  }

  handleDelete(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(() => this.router.navigate(['/']))
  }

}
