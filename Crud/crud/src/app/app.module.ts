import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { RouttingComponent } from './routting/routting.component';

const appRoutes: Routes = [
  { path:'list', component:ListEmployeesComponent },
  { path: 'create', component:CreateEmployeeComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    RouttingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
