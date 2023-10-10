import { Injectable } from '@angular/core';
import { Student } from '../model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  //! ABM
  //* ALTA
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

  // //* MODIFICACION
  // updateStudent(student: Student): void {
  //   console.log('modifica el alumno con dni: ' + student.id);
  // }

  //* BAJA
  desactivateStudent(student: Student): void {

    student.active = !student.active;

    // this.dataSource.find((s) => s.id === id).active = false;

  }
  // ABM
}
