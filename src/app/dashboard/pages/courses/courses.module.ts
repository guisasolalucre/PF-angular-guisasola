import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CoursesTableComponent } from './courses-table/courses-table.component';
import { CoursesContentComponent } from './courses-content/courses-content.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    CourseDialogComponent,
    CoursesTableComponent,
    CoursesContentComponent,
    CourseDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDatepickerModule,
  ],
  exports: [
    CourseDialogComponent,
    CoursesTableComponent,
    CoursesContentComponent,
  ]
})
export class CoursesModule { }
