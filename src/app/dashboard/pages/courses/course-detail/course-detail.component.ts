import { Component } from '@angular/core';
import { IEnrollment } from '../../enrollments/model/IEnrollment';
import { Observable } from 'rxjs';
import { Course } from '../model/Course';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { StudentService } from '../../students/student.service';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentDialogComponent } from '../../enrollments/enrollment-dialog/enrollment-dialog.component';
import { EnrollmentActions } from '../../enrollments/store/enrollment.actions';
import { enrollmentsSelector, isLoadingEnrollments } from '../../enrollments/store/enrollment.selectors';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {

  id: string
  course?: Course

  displayedColumns: string[] = ['student', 'actions'];
  dataSource: IEnrollment[] = []
  students!: Observable<IEnrollment[]>
  isLoading: boolean = true

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private studentService: StudentService,
    private dialog: MatDialog,
    private store: Store,
  ) {
    this.id = this.activatedRoute.snapshot.params['id']

    this.courseService.getById(this.id)
      .subscribe(c => this.course = c[0])

    this.getEnrollments()    
  }

  getEnrollments(){
    this.store.dispatch(EnrollmentActions.loadEnrollmentsByCourse({
      id: this.id
    }));
    
    this.students = this.store.select(enrollmentsSelector)

    this.store.select(isLoadingEnrollments).subscribe(
      (isLoading) => this.isLoading = isLoading
    )
  }

  enrollStudent(): void {
    this.dialog.open(EnrollmentDialogComponent, {
      data: {
        student: null,
        course: this.course,
      },
    })
    .afterClosed()
    .subscribe({
      next: () => {
        this.store.dispatch(EnrollmentActions.loadEnrollmentsByCourse({ id: this.id }));
      }
    });
  }

  updateCourse(): void {
    this.dialog
      .open(CourseDialogComponent, {
        data: this.course,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {

          if (!!result) {
            this.courseService.updateCourse(this.id, result).subscribe(
              () => {
                this.courseService.getById(this.id)
                  .subscribe(c => this.course = c[0])
              }
            )
          }
        }
      })
  }

  sendEmail(id: string) {
    this.studentService.sendEmail(id)
  }

  deleteEnrollment(id: string): void {
    this.store.dispatch(EnrollmentActions
      .deleteEnrollment({
        id: id,
        source: 'course',
        sourceId: this.id
      }))
    this.getEnrollments()
  }

}
