import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private toastr: ToastrService) {
  }

  showToaster() {
    this.toastr.success("Added Dta To FireBase", "Success", {
      positionClass: 'toast-bottom-right',

    });

  }
}

