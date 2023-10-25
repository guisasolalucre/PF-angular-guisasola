import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/model';
import { StudentFormDialogComponent } from '../student-form-dialog/student-form-dialog.component';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent {

  @Input()
  page: string | null = ''

  @Input()
  allStudents: Array<Student> = []

  displayedColumns: string[] = ['idnumber', 'fullname', 'dob', 'actions'];

  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;

  @ViewChild(MatSort) 
  sort!: MatSort;

  dataSource!: MatTableDataSource<Student>

  constructor(
    public dialog: MatDialog,
    public studentService: StudentService,
  ) {}

  ngOnInit() {
    this.setTable();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    this.setTable();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  setTable(){
    if (this.page === 'enabledStudents') {
      this.dataSource = new MatTableDataSource(this.allStudents.filter( s =>  s.active));
    } else if (this.page === 'inactiveStudents') {
      this.dataSource = new MatTableDataSource(this.allStudents.filter( s =>  !s.active));
    } else {
      console.log("error al cargar los estudiantes");
    }
  }

  onUpdateStudent(student: Student): void {

    this.dialog
      .open(StudentFormDialogComponent, {
        data: student,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {

          if (!!result) {
            const newStudent = this.studentService.updateStudent(student.id, result);

            this.allStudents = this.allStudents.map((s) =>
              s.id === newStudent.id ? { ...s, ...newStudent } : s)

            this.setTable()
          }
        }
      })
  }

  onDesactivateStudent(id: string): void {
    if (confirm('Are you sure?')) {
      const student = this.allStudents.find((s) => s.id === id)
      if (!!student) {
        this.studentService.desactivateStudent(student)
        this.setTable()
      }
    }
  }

  sendEmail(email: string){
    alert('Email has been sent to ' + email)
  }
}
