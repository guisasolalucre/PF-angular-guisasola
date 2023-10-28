import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/model';
import { StudentService } from 'src/app/dashboard/pages/students/student.service';
import { Router } from '@angular/router';

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

  displayedColumns: string[] = ['idnumber', 'fullname', 'dob', 'actions'];

  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;

  @ViewChild(MatSort) 
  sort!: MatSort;

  dataSource = new MatTableDataSource<Student>()

  constructor(
    public dialog: MatDialog,
    public studentService: StudentService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Student>(this.table)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  sendEmail(email: string){
    alert('Email has been sent to ' + email)
  }

  goToDetail(userId: number): void {
    this.router.navigate(
      [
        'dashboard',
        'stuents',
        'detail',
        userId,
      ],
    );
  }
}
