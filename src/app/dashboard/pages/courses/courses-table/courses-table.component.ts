import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Course } from 'src/app/model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent {

  @Input()
  table: Course[] = [];

  @Output()
  desactivateCourse = new EventEmitter<string>();

  @Output()
  updateCourse = new EventEmitter<Course>();

  displayedColumns: string[] = ['name', 'start', 'end', 'actions'];

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

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Course>(this.table)
  }

  ngAfterViewInit() {
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
