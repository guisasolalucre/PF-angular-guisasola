import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { StudentFormDialogComponent } from '../students/student-form-dialog/student-form-dialog.component';
import { StudentsTableComponent } from '../students/students-table/students-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsContentComponent } from './students-content/students-content.component';

@NgModule({
  declarations: [
    StudentFormDialogComponent,
    StudentsTableComponent,
    StudentsContentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDatepickerModule,
  ],
  exports: [
    StudentFormDialogComponent,
    StudentsTableComponent,
    StudentsContentComponent,
  ]
})
export class StudentsModule { }
