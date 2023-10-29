import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Course } from 'src/app/model';
import { CourseService } from '../course.service';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { nanoid } from 'nanoid';

@Component({
  selector: 'app-courses-content',
  templateUrl: './courses-content.component.html',
  styleUrls: ['./courses-content.component.scss']
})
export class CoursesContentComponent {

  allCourses$: Observable<Course[]>

  constructor(
    public dialog: MatDialog,
    public courseService: CourseService,
  ) {
      this.allCourses$ = courseService.getCourses$();
  }

  onAddCourse(): void {
    this.dialog
      .open(CourseDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.allCourses$ = this.courseService.createCourse$({
              id: nanoid(5),
              name: result.name,
              startDate: result.startDate,
              endDate: result.endDate,
            });            
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
            this.allCourses$ = this.courseService.updateCourse$(course.id, result);
          }
        }
      })
  }

}
