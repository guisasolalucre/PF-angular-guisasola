import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseService } from './course.service';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { nanoid } from 'nanoid';
import { Course } from './model/Course';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2';
import { AddNameDialogComponent } from './add-name-dialog/add-name-dialog.component';
import { Store } from '@ngrx/store';
import { CourseActions } from './store/course.actions';
import { coursesSelector, isLoadingCourses } from './store/course.selectors';
import { authUser } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = []

  isAdmin: boolean = false

  isLoading: boolean = true

  constructor(
    private dialog: MatDialog,
    private courseService: CourseService,
    private store: Store,
  ) {
    this.store.select(authUser).subscribe(
      (user) => 
      this.isAdmin = user?.role === 'ADMINISTRATOR' ? true : false
    )

    this.store.dispatch(CourseActions.loadCourses())
    this.store.select(isLoadingCourses).subscribe(
      (isLoading) => this.isLoading = isLoading
    )
    this.store.select(coursesSelector).subscribe(
      (courses) => this.courses = courses
    )
  }

  onAddTeacher():void {
    this.dialog
      .open(AddNameDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.courseService.addTeacher({
              id: nanoid(5),
              name: result.name
            }).subscribe();
          }
        }
      })
  }

  onAddName(): void {
    this.dialog
      .open(AddNameDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.courseService.addCourseName({
              id: nanoid(5),
              nameString: result.name
            }).subscribe();
          }
        },
      });
  }

  onAddCourse(): void {
    this.dialog
      .open(CourseDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            let payload: Course = {
              id: nanoid(5),
              name: result.name,
              startDate: result.startDate,
              endDate: result.endDate,
              teacher: result.teacher,
            }
            this.store.dispatch(CourseActions.createCourse({payload}))
          }
        }
      })
  }

  onUpdateCourse(course: Course): void {
    this.dialog
      .open(CourseDialogComponent, {
        data: course,
      })
      .beforeClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {      
            this.store.dispatch(CourseActions
              .updateCourse({
                id: course.id, 
                payload: result
              })
            )
          }
        }
      })
  }

  onDeleteCourse(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(CourseActions.deleteCourse({id}))
      }
    })
  }

}
