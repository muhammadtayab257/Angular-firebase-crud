import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  createemployee!: FormGroup;
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private employeeservice: EmployeeService,
    private toastr: ToastrService) {

    this.createemployee = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      document: ['', Validators.required],
      salary: ['', Validators.required],
    })

  }

  ngOnInit(): void {

  }
  getData() {
    this.submitted = true;
    if (this.createemployee.invalid) {
      return
    }
    const employee: any = {
      name: this.createemployee.value.name,
      lastname: this.createemployee.value.lastname,
      document: this.createemployee.value.document,
      salary: this.createemployee.value.salary,
      creationDate: new Date(),
      dateUpdate: new Date(),
    }

    this.employeeservice.addEmployee(employee).then(() => {
      console.log("User Registered Sucssfully");
      this.toastr.success('Success', 'User Successfully Added', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(err => {
      console.log(err);

    })

  }
}
