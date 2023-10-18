import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/model';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent {

  @Input()
  table: Array<Student> = []

  @Output()
  updateStudent = new EventEmitter<Student>();

  @Output()
  desactivateStudent = new EventEmitter<string>();

  displayedColumns: string[] = ['idnumber', 'fullname', 'dob', 'actions'];

  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;

  @ViewChild(MatSort) 
  sort!: MatSort;

  dataSource!: MatTableDataSource<Student>



  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.table);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.table);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  sendEmail(email: string){
    alert('Email has been sent to ' + email)
  }
}
