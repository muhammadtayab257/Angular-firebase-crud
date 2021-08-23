import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  editemployee!: FormGroup;
  submitted: boolean = false;
  id!: string | null;
  constructor(
    private fb: FormBuilder,
    private employeeservice: EmployeeService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.editemployee = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      document: ['', Validators.required],
      salary: ['', Validators.required],
    });
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }



  ngOnInit(): void {
    this.id != null ? this.getValues() : this.router.navigate(['/employeeList'])

  }

  getValues() {
    this.submitted = true;
    this.employeeservice.getSingleEmployee(this.id).subscribe(data => {
      this.editemployee.setValue({
        name: data.payload.data().name,
        lastname: data.payload.data().lastname,
        document: data.payload.data().document,
        salary: data.payload.data().salary,

      })

    })
  }

  // FINALLY UPDATE DATA
  UpdateData() {


    const editemployee: any = {
      name: this.editemployee.value.name,
      lastname: this.editemployee.value.lastname,
      document: this.editemployee.value.document,
      salary: this.editemployee.value.salary,
      dateUpdate: new Date()
    }

    this.employeeservice.updateEmployee(this.id, editemployee).then(() => {
      this.toastr.success("User Edited Successfully", "Success")
    }).catch(() => {
      this.toastr.error("Some Thing Webt Wrong", "Error")
    })

  }


}
