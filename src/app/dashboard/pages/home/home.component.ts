import { Component, Inject, ViewChild } from '@angular/core';
import { Student } from 'src/app/model';
import { students } from 'src/app/data/students';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormDialogComponent } from '../student-form-dialog/student-form-dialog.component';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  page: string = 'home';

  allStudents: Array<Student> = students;

  activeStudents: Array<Student> = this.allStudents.filter((s) => s.active);

  desactiveStudents: Array<Student> = this.allStudents.filter((s) => !s.active);

  constructor(
    public dialog: MatDialog,

    public studentService: StudentService,
  ) { }


  onAddStudent(): void {
    this.dialog
      .open(StudentFormDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            const newStudent = this.studentService.createStudent(result);
            this.allStudents.push(newStudent);
            this.activeStudents = this.allStudents.filter((s) => s.active);
          }
        }
      })
  }

  onUpdateStudent(student: Student): void{
    this.dialog
      .open(StudentFormDialogComponent, {
        data: student,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            const newStudent = this.studentService.createStudent(result);
                        
            this.allStudents = this.allStudents.map( (s) =>
              s.id === newStudent.id ? {...s, ...newStudent} : s)

            this.activeStudents = this.allStudents.filter((s) => s.active);
          }
        }
      })
  }

  onDesactivateStudent(id: string): void{
    if (confirm('Esta seguro?')) {
      const student = this.allStudents.find((s) => s.id === id)
      if(!!student){
        this.studentService.desactivateStudent(student)
        this.activeStudents = this.allStudents.filter((s) => s.active);
        this.desactiveStudents = this.allStudents.filter((s) => !s.active);
      }
    }
  }


  // TODO ----------------------------------------------------------------
  //! FALTAN VALIDACIONES PARA LOS CASOS:
  //? QUE SE QUIERA DAR DE ALTA UN ESTUDIANTE QUE YA EXISTA POR DNI O EMAIL
  //* QUE NO SE PUEDA MODIFICAR EL DNI CUANDO SE HACE UPDATE
  // TODO ----------------------------------------------------------------

  // studentExists(id: string, email: string): boolean {
  //   if (students.find((s) => s.id === id) != undefined ||
  //       students.find((s) => s.id === email) != undefined ) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

}
