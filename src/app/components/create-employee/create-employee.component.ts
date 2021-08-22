import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  createemployee!: FormGroup;
  submitted: boolean = false;
  id!: string | null;
  text: string = "Add New User";
  constructor(
    private fb: FormBuilder,
    private employeeservice: EmployeeService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.createemployee = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      document: ['', Validators.required],
      salary: ['', Validators.required],
    })
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.editEmployee();
  }

  //
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
      this.router.navigate(['employeeList'])
      this.toastr.success('Success', 'User Successfully Added', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(err => {
      console.log(err);

    })

  }

  //
  editEmployee() {
    this.text = "Edit User"
    if (this.id !== null) {
      this.employeeservice.getSingleEmployee(this.id).subscribe(data => {
        console.log();
        this.createemployee.setValue({
          name: data.payload.data()['name'],
          lastname: data.payload.data()['lastname'],
          document: data.payload.data()['document'],
          salary: data.payload.data()['salary'],
        })
      })

    }

  }

}
