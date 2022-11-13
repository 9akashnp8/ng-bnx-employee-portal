import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleAddNewEmployee() {
    console.log("Adding New Employee");
  }

  handleViewAllEmployees() {
    console.log("Viewing all employees");
  }

  handleLogout() {
    console.log("handle log out");
  }
}
