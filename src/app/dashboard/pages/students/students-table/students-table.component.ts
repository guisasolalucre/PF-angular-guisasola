import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/dashboard/pages/students/student.service';
import { Router } from '@angular/router';
import { Student } from '../model/Student';

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
  sendEmail = new EventEmitter<string>();

  displayedColumns: string[] = ['idnumber', 'fullname', 'dob', 'active', 'actions'];

  constructor(
    public dialog: MatDialog,
    public studentService: StudentService,
    private router: Router,
  ) {}

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
