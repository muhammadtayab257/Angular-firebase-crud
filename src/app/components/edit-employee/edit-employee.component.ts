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
    })
  }

  ngOnInit(): void {
  }

  UpdateData() {

  }
}
