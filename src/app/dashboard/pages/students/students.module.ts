import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { StudentFormDialogComponent } from '../students/student-form-dialog/student-form-dialog.component';
import { StudentsTableComponent } from '../students/students-table/students-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsComponent } from './students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsRoutingModule } from './students-routing.module';

@NgModule({
  declarations: [
    StudentFormDialogComponent,
    StudentsTableComponent,
    StudentsComponent,
    StudentDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDatepickerModule,
    StudentsRoutingModule,
  ],
  exports: [
    StudentFormDialogComponent,
    StudentsTableComponent,
    StudentsComponent,
  ]
})
export class StudentsModule { }
