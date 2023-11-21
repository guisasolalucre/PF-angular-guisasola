import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/dashboard/pages/students/student.service';
import { Router } from '@angular/router';
import { Student } from '../model/Student';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent {

  @Input()
  table: Student[] = [];

  @Output()
  desactivateStudent = new EventEmitter<string>();

  @Output()
  updateStudent = new EventEmitter<Student>();

  @Output()
  deleteStudent = new EventEmitter<string>();

  @Output()
  sendEmail = new EventEmitter<string>();

  displayedColumns: string[] = ['idnumber', 'fullname', 'dob', /*'active',*/ 'actions'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild('studentsSort', { static: false }) 
  studentsSort!: MatSort;

  dataSource = new MatTableDataSource<Student>()

  constructor(
    public dialog: MatDialog,
    public studentService: StudentService,
    private router: Router,
  ) { }

  ngAfterViewInit() {
    this.initialize()
  }

  ngOnChanges(): void {
    this.initialize()
  }

  initialize(): void {
    this.dataSource = new MatTableDataSource<Student>(this.table);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.studentsSort;
  }

  goToDetail(id: number): void {
    this.router.navigate(
      [
        'dashboard',
        'students',
        'detail',
        id,
      ],
    );
  }
}
