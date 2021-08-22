import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  // employees: any = [];
  constructor(private employeeservice: EmployeeService) { }

  ngOnInit(): void {
  this.  getAllEmployees();
  }


  getAllEmployees() {
    this.employeeservice.getEmployees().subscribe(element => {
      element.forEach((item:any) => {
        // console.log(item.payload);
        // console.log(item.payload.doc.id);
        // console.log(item.payload.doc.data());

      })
    })
  }

}
