import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../model/Course';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
  deleteCourse = new EventEmitter<string>();

  @Output()
  updateCourse = new EventEmitter<Course>();

  displayedColumns: string[] = ['name', 'teacher', 'start', 'end', 'actions'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) 
  sort!: MatSort;

  dataSource = new MatTableDataSource<Course>()

  constructor(
    public dialog: MatDialog,
    public courseService: CourseService,
    private router: Router,
  ) {}

  ngAfterViewInit(): void {
    this.initialize()
  }

  ngOnChanges(): void {
    this.initialize()
  }

  initialize(): void {
    this.dataSource = new MatTableDataSource<Course>(this.table);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

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
