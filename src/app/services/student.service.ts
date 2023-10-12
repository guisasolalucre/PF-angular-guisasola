import { Injectable } from '@angular/core';
import { Student } from '../model';
import { students } from '../data/students';

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
      id: object.id,
      active: true,
      name: object.name,
      surname: object.surname,
      dob: object.dob,
      email: object.email,
      courses: [],
    }
    return newStudent;
  }

  // updateStudent(student: Student): void {
  //   console.log('modifica el alumno con dni: ' + student.id);
  // }

  desactivateStudent(student: Student): void {
    student.active = !student.active;
  }

  studentExistsById(id: string): boolean {
    return this.getStudents().find( (s) => s.id === id) ? true : false 
  }

  studentExistsByEmail(email: string): boolean {
    return this.getStudents().find( (s) => s.email === email) ? true : false
  }

}
