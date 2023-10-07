import { Component } from '@angular/core';
import { Student } from 'src/app/model';
import { students } from 'src/app/data/students';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  page: string = 'home'

  dataSource: Array<Student> = students
  displayedColumns: string[] = ['id', 'name', 'surname', 'dob'];

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddStudentDialogComponent);

    dialogRef.afterClosed()
      .subscribe({
        next: (result) => {
          console.log(`Dialog result: ${result}`);
          // if (!!result){
          //   this.dataSource.push(result);
          // }
        }
      })
  }
}