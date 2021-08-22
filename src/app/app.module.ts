import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
// COMPONENETS
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    NavbarComponent,
    EditEmployeeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
