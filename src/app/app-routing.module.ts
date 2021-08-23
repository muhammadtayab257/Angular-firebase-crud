import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { PageNOtFoundComponent } from './components/page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: 'create-employe', component: CreateEmployeeComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent },
  { path: "**", component: PageNOtFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
