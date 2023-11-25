import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../model/Student';
import { IEnrollment } from '../../enrollments/model/IEnrollment';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EnrollmentActions } from '../../enrollments/store/enrollment.actions';
import { enrollmentsSelector, isLoadingEnrollments } from '../../enrollments/store/enrollment.selectors';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentDialogComponent } from '../../enrollments/enrollment-dialog/enrollment-dialog.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {

  id: string
  student?: Student
  courses!: Observable<IEnrollment[]>
  isLoading: boolean = true
  
  displayedColumns: string[] = ['course', 'startDate', 'teacher', 'actions'];
  dataSource: IEnrollment[] = []
  
  constructor(
    public activatedRoute: ActivatedRoute,
    public studentService: StudentService,
    private dialog: MatDialog,
    private store: Store,
  ) {
    this.id = this.activatedRoute.snapshot.params['id']

    this.studentService.getById(this.id)
      .subscribe(s => this.student = s[0])

    this.getEnrollments()
  }

  getEnrollments(): void{
    this.store.dispatch(
      EnrollmentActions.loadEnrollmentsByStudent({ id: this.id })
    );
      
    this.courses = this.store.select(enrollmentsSelector)
    this.store.select(isLoadingEnrollments).subscribe(
      (isLoading) => this.isLoading = isLoading
    )
  }

  enrollStudent(): void {
    this.dialog.open(EnrollmentDialogComponent, {
      data: {
        student: this.student,
        course: null,
      },
    })
    .afterClosed().subscribe( () => {
      this.getEnrollments()
    })
  }

  deleteEnrollment(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(EnrollmentActions
          .deleteEnrollment({
            id: id,
            source: 'student',
            sourceId: this.id
          }))
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

}
