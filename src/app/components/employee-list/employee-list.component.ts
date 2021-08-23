import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  employees: any = [];
  constructor(private employeeservice: EmployeeService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }


  getAllEmployees() {
    this.employeeservice.getEmployees().subscribe(element => {
      this.employees = [];
      element.forEach((item: any) => {
        // console.log(item.payload.doc.id);
        this.employees.push({
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        })
      })
    });

  }

  // DELETE EMPLOYEE
  deleteEmoloye(id: string) {
    this.employeeservice.deleteEmployee(id).then(() => {

      this.toastr.error('Danger', 'User Successfully Added', {
        positionClass: 'toast-bottom-right'
      })
    }).catch(err => {
      console.log(err);

    })
  }

}
