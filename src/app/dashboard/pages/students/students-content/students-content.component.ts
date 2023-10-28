import { Component } from '@angular/core';
import { StudentFormDialogComponent } from '../student-form-dialog/student-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/dashboard/pages/students/student.service';
import { Student } from 'src/app/model';
import { Observable } from 'rxjs';
import { nanoid } from 'nanoid';

@Component({
  selector: 'app-students-content',
  templateUrl: './students-content.component.html',
  styleUrls: ['./students-content.component.scss']
})
export class StudentsContentComponent {

  allStudents$: Observable<Student[]>

  constructor(
    public dialog: MatDialog,
    public studentService: StudentService,
  ) {
      this.allStudents$ = studentService.getStudents$();
  }

  onAddStudent(): void {
    this.dialog
      .open(StudentFormDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.allStudents$ = this.studentService.createStudent$({
              id: nanoid(5),
              idnumber: result.idnumber,
              active: true,
              name: result.name,
              surname: result.surname,
              dob: result.dob,
              email: result.email,
            });            
          }
        }
      })
  }

  onUpdateStudent(student: Student): void {

    this.dialog
      .open(StudentFormDialogComponent, {
        data: student,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {

          if (!!result) {
            this.allStudents$ = this.studentService.updateStudent$(student.id, result);
          }
        }
      })
  }

  onDesactivateStudent(id: string): void {
    if (confirm('Are you sure?')) {
      this.allStudents$ = this.studentService.desactivateStudent$(id)
      }
  } 

}
