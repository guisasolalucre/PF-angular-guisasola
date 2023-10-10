import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { StudentFormDialogComponent } from '../students/student-form-dialog/student-form-dialog.component';
import { StudentsTableComponent } from '../students/students-table/students-table.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    StudentFormDialogComponent,
    StudentsTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDatepickerModule,
  ],
  exports: [
    StudentFormDialogComponent,
    StudentsTableComponent,
  ]
})
export class StudentsModule { }
