import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseService } from './course.service';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { nanoid } from 'nanoid';
import { Course } from './model/Course';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2';
import { AddNameDialogComponent } from './add-name-dialog/add-name-dialog.component';
import { delay } from 'rxjs';

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
    public dialog: MatDialog,
    public courseService: CourseService,
    private authService: AuthService,
  ) {
    this.courseService.getCourses()
    .pipe(delay(500))
    .subscribe({
      next: (data: Course[]) => {
        this.courses = data;
        this.isLoading = false
      },
      error: (error) => { console.log(error) }
    });

    this.authService.authUser$.subscribe({
      next: (user) => {
        this.isAdmin = user?.role === 'ADMINISTRATOR' ? true : false
      }
    })
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
            this.courseService.createCourse({
              id: nanoid(5),
              name: result.name,
              startDate: result.startDate,
              endDate: result.endDate,
              teacher: result.teacher,
            }).subscribe(
              (data: Course[]) => {
                this.courses = data;
              },
            )
          }
        }
      })
  }

  onUpdateCourse(course: Course): void {

    this.dialog
      .open(CourseDialogComponent, {
        data: course,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {

          if (!!result) {
            this.courseService.updateCourse(course.id, result).subscribe(
              (data: Course[]) => {
                this.courses = data;
              },
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
        this.courseService.deleteCourse(id).subscribe(
          (data: Course[]) => {
            this.courses = data;
          },
        )
      }
    })
  }

}
