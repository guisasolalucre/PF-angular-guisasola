import { Component } from '@angular/core';
import { StudentFormDialogComponent } from './student-form-dialog/student-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/dashboard/pages/students/student.service';
import { nanoid } from 'nanoid';
import { Student } from './model/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  students: Student[] = []

  constructor(
    public dialog: MatDialog,
    public studentService: StudentService,
  ) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      (data: Student[]) => this.students = data
    );
  }

  onAddStudent(): void {
    this.dialog
      .open(StudentFormDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.studentService.createStudent({
              id: nanoid(5),
              idnumber: result.idnumber,
              active: true,
              name: result.name,
              surname: result.surname,
              dob: result.dob,
              email: result.email,
            }).subscribe(
              (data: Student[]) => {
                this.students = data;
              },
            )            
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
            this.studentService.updateStudent(
              student.id, 
              result
            ).subscribe(
              (data: Student[]) => {
                this.students = data;
              },
            )
            ;
          }
        }
      })
  }

  onDesactivateStudent(id: string): void {
    this.studentService.changeStatus(id).subscribe(
      (data: Student[]) => {
        this.students = data;
      },
    )
  } 

  onSendEmail(id: string): void {
    this.studentService.sendEmail(id)
  }

}
