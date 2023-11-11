import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CourseService } from '../course.service';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { nanoid } from 'nanoid';
import { Course } from '../model/Course';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-courses-content',
  templateUrl: './courses-content.component.html',
  styleUrls: ['./courses-content.component.scss']
})
export class CoursesContentComponent {

  courses: Course[] = []

  isAdmin: boolean = false

  constructor(
    public dialog: MatDialog,
    public courseService: CourseService,
    private authService: AuthService,
  ) {
    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },
      error: (error) => { console.log(error) }
    });

      this.authService.authUser$.subscribe({
        next: (user) => { 
          this.isAdmin = user?.role === 'ADMINISTRATOR' ? true : false
        }
      })
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

}
