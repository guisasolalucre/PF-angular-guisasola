import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../model/Course';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { authUser } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent {

  isAdmin: boolean = false

  @Input()
  table!: Course[];

  @Output()
  deleteCourse = new EventEmitter<string>();

  @Output()
  updateCourse = new EventEmitter<Course>();

  displayedColumns: string[] = ['name', 'teacher', 'start', 'end', 'actions'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild('coursesSort', { static: false })
  coursesSort!: MatSort;

  dataSource = new MatTableDataSource<Course>()

  constructor(
    private router: Router,
    private store: Store,
  ) { 
    this.store.select(authUser).subscribe(
      (user) => 
      this.isAdmin = user?.role === 'ADMINISTRATOR'
    )
  }

  ngAfterViewInit(): void {
    this.initialize()
  }

  ngOnChanges(): void {
    this.initialize()
  }

  initialize(): void {
    this.dataSource = new MatTableDataSource<Course>(this.table);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (course, sortHeaderId) => {
      switch (sortHeaderId) {
        case 'name':
          return course.name?.nameString || '';
        case 'teacher':
          return course.teacher?.name || '';
        case 'start':
          return course.startDate?.toString() || 0;
        case 'end':
          return course.endDate?.toString() || 0;
        default:
          return '';
      }
    };
    this.dataSource.sort = this.coursesSort;
  }

  goToDetail(id: string): void {
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
