import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeSalaryFormComponent } from './components/employee-salary-form/employee-salary-form.component';
import { EmployeeEditFormComponent } from './components/employee-edit-form/employee-edit-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: EmployeesTableComponent
  },
  {
    path: 'employee/add',
    component: EmployeeFormComponent
  },
  {
    path: 'employee/add/salary',
    component: EmployeeSalaryFormComponent
  },
  {
    path: 'employee/:id/edit',
    component: EmployeeEditFormComponent
  },
  {
    path: 'employee/:id',
    component: EmployeeCardComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    EmployeesTableComponent,
    EmployeeCardComponent,
    EmployeeFormComponent,
    EmployeeSalaryFormComponent,
    EmployeeEditFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FormsModule,
    HttpClientXsrfModule.withOptions({ cookieName: 'csrftoken', headerName: 'X-CSRFToken'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
