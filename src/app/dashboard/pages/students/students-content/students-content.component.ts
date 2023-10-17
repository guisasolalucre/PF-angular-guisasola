import { Component } from '@angular/core';
import { StudentFormDialogComponent } from '../student-form-dialog/student-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-students-content',
  templateUrl: './students-content.component.html',
  styleUrls: ['./students-content.component.scss']
})
export class StudentsContentComponent {

  page = new FormControl('enabledStudents');

  allStudents: Array<Student> = [];
  activeStudents: Array<Student> = [];
  desactiveStudents: Array<Student> = [];

  constructor(
    public dialog: MatDialog,
    public studentService: StudentService,
  ) {

    this.allStudents = this.studentService.getStudents();
    this.activeStudents = this.allStudents.filter((s) => s.active);
    this.desactiveStudents = this.allStudents.filter((s) => !s.active);
  }

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

  onUpdateStudent(student: Student): void {
    console.log('abro el update');

    this.dialog
      .open(StudentFormDialogComponent, {
        data: student,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {

          if (!!result) {
            const newStudent = this.studentService.updateStudent(student.id, result);

            this.allStudents = this.allStudents.map((s) =>
              s.id === newStudent.id ? { ...s, ...newStudent } : s)

            this.activeStudents = this.allStudents.filter((s) => s.active);
          }
        }
      })
  }

  onDesactivateStudent(id: string): void {
    if (confirm('Esta seguro?')) {
      const student = this.allStudents.find((s) => s.id === id)
      if (!!student) {
        this.studentService.desactivateStudent(student)
        this.activeStudents = this.allStudents.filter((s) => s.active);
        this.desactiveStudents = this.allStudents.filter((s) => !s.active);
      }
    }
  }

}
