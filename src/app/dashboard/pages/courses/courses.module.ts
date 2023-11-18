import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CoursesTableComponent } from './courses-table/courses-table.component';
import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CoursesRoutingModule } from './courses-routing.module';
import { AddNameDialogComponent } from './add-name-dialog/add-name-dialog.component';



@NgModule({
  declarations: [
    CourseDialogComponent,
    CoursesTableComponent,
    CoursesComponent,
    CourseDetailComponent,
    AddNameDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDatepickerModule,
    CoursesRoutingModule,
  ],
  exports: [
    CourseDialogComponent,
    CoursesTableComponent,
    CoursesComponent,
  ]
})
export class CoursesModule { }
