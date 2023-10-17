import { Injectable } from '@angular/core';
import { Student } from '../model';
import { students } from '../data/students';
import { nanoid } from "nanoid";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Array<Student>{
    return students
  }
  
  createStudent(object: any): Student {
    const newStudent: Student = {
      id: nanoid(5),
      idnumber: object.idnumber,
      active: true,
      name: object.name,
      surname: object.surname,
      dob: object.dob,
      email: object.email,
      courses: [],
    }
    return newStudent;
  }

  updateStudent(idE: string, object: any): Student {
    const student: Student = {
      id: idE,
      idnumber: object.idnumber,
      active: true,
      name: object.name,
      surname: object.surname,
      dob: object.dob,
      email: object.email,
      courses: [],
    }
    return student;
  }

  desactivateStudent(student: Student): void {
    student.active = !student.active;
  }

  studentExistsByIdNumber(idnumber: number): boolean {
    return this.getStudents().find( (s) => s.idnumber === idnumber) ? true : false 
  }

  studentExistsByEmail(email: string): boolean {
    return this.getStudents().find( (s) => s.email === email) ? true : false
  }

}
