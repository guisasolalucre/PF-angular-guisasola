import { Injectable } from '@angular/core';
import { Student } from '../../../model';
import { students } from '../../../data/students';
import { nanoid } from "nanoid";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentsList: Student[] = students

  constructor() { }

  getStudents$(): Observable<Student[]>{
    return of(students);
  }
  
  createStudent$(student: Student): Observable<Student[]> {
    this.studentsList.push(student)
    return of([...this.studentsList]);
  }

  updateStudent$(idE: string, object: any): Observable<Student[]> {
    const student: Student = {
      id: idE,
      idnumber: object.idnumber,
      active: true,
      name: object.name,
      surname: object.surname,
      dob: object.dob,
      email: object.email,
    }
    return of(
      this.studentsList.map((s) => (s.id === idE ? { ...s, ...student } : s))
    )
  }

  desactivateStudent$(id: string): Observable<Student[]> {
    const student = this.getStudentById$(id).subscribe(s => s!.active = !s!.active)
    return of(
      this.studentsList.map((s) => ({ ...s, ...student }))
    )
  }

  getStudentById$(id: string): Observable<Student | undefined> {
    return of(this.studentsList.find((s) => s.id === id));
  }

  getStudentByIdNumber$(idN: number): Observable<Student | undefined> {
    return of(this.studentsList.find((s) => s.idnumber === idN));
  }

  getStudentByEmail$(email: string): Observable<Student | undefined> {
    return of(this.studentsList.find((s) => s.email === email));
  }

}
