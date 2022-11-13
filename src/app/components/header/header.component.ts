import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  handleAddNewEmployee() {
    this.router.navigate(['/employee', 'add'])
  }

  handleViewAllEmployees() {
    this.router.navigate(['/'])
  }

  handleLogout() {
    console.log("handle log out");
  }
}
