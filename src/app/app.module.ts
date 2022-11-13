import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';

const appRoutes: Routes = [
  {
    path: '',
    component: EmployeesTableComponent
  },
  {
    path: 'employee-detail',
    component: EmployeeCardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    EmployeesTableComponent,
    EmployeeCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
