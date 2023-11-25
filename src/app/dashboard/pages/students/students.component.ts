import { Component } from '@angular/core';
import { StudentFormDialogComponent } from './student-form-dialog/student-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/dashboard/pages/students/student.service';
import { nanoid } from 'nanoid';
import { Student } from './model/Student';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { StudentActions } from './store/student.actions';
import { isLoadingStudents, studentsSelector } from './store/student.selectors';
import { EnrollmentActions } from '../enrollments/store/enrollment.actions';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  students: Student[] = []

  isLoading: boolean = true

  constructor(
    private dialog: MatDialog,
    private studentService: StudentService,
    private store: Store,
  ) { 
    
  }

  ngOnInit(): void {
    this.store.dispatch(StudentActions.loadStudents())
    this.store.select(studentsSelector).subscribe(
      (students) => this.students = students
    )
    this.store.select(isLoadingStudents).subscribe(
      (isLoading) => this.isLoading = isLoading
    )
  }

  onAddStudent(): void {
    this.dialog
      .open(StudentFormDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            let payload: Student = {
              id: nanoid(5),
              idnumber: result.idnumber,
              name: result.name,
              surname: result.surname,
              dob: result.dob,
              email: result.email,
            }
            this.store.dispatch(StudentActions.createStudent({payload}))
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
            this.store.dispatch(StudentActions.updateStudent({
              id: student.id,
              payload: result
            }))
          }
        }
      })
  }

  onDeleteStudent(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(StudentActions.deleteStudent({id}))
        Swal.fire({
          title: 'Deleted!',
          icon: 'success',
          confirmButtonText: 'OK',
          heightAuto: false,
          timer: 1500,
          timerProgressBar: true,
        })
      }
    })
  }

  onSendEmail(id: string): void {
    this.studentService.sendEmail(id)
  }

}
