import { Component } from '@angular/core';
import { StudentFormDialogComponent } from '../student-form-dialog/student-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-students-content',
  templateUrl: './students-content.component.html',
  styleUrls: ['./students-content.component.scss']
})
export class StudentsContentComponent {

  page = new FormControl('enabledStudents');

  allStudents: Array<Student> = [];

  constructor(
    public dialog: MatDialog,
    public studentService: StudentService,
  ) {
      this.allStudents = studentService.getStudents();
  }

  onAddStudent(): void {
    this.dialog
      .open(StudentFormDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            const newStudent = this.studentService.createStudent(result);
            this.allStudents.push(newStudent);;
          }
        }
      })
  }

  

}
