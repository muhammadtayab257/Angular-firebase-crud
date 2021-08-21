import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private firestore: AngularFirestore) { }


  addEmployee(employee: any): Promise<any> {
    return this.firestore.collection("Users").add(employee)
  }

}
