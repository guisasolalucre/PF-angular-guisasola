import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../model/Course';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent {

  @Input()
  isAdmin: boolean = false

  @Input()
  table: Course[] = [];

  @Output()
  desactivateCourse = new EventEmitter<string>();

  @Output()
  updateCourse = new EventEmitter<Course>();

  displayedColumns: string[] = ['name', 'start', 'end', 'actions'];

  constructor(
    public dialog: MatDialog,
    public courseService: CourseService,
    private router: Router,
  ) {}

  goToDetail(id: number): void {
    this.router.navigate(
      [
        'dashboard',
        'courses',
        'detail',
        id,
      ],
    );
  }

}
