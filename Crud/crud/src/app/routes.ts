import { Routes } from '@angular/router';
import { Employee } from './models/employee.model';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
const routeConfig: Routes = [
  {
    path: '',
    component: Employee,
    title: 'Home page'
  },
  {
    path: './employee/create-employee',
    component: CreateEmployeeComponent,
    title: 'Home details'
  },
  {
    path: './employee/list-employees',
    component: ListEmployeesComponent,
    title: 'Home details'
  },
];

export default routeConfig;
