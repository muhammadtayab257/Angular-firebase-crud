import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private firestore: AngularFirestore) { }

  // Add New Employee
  addEmployee(employee: any): Promise<any> {
    return this.firestore.collection("Users").add(employee)
  }
  // Get All Employee
  getEmployees(): Observable<any> {
    return this.firestore.collection("Users", ref => ref.orderBy("creationDate", "desc")).snapshotChanges();
  }

  // Delete Employee
  deleteEmployee(id: string): Promise<any> {
    return this.firestore.collection("Users").doc(id).delete();
  }
}
