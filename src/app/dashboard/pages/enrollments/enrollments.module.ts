import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnrollmentsTableComponent } from './enrollments-table/enrollments-table.component';
import { EnrollmentDialogComponent } from './enrollment-dialog/enrollment-dialog.component';


@NgModule({
  declarations: [
    EnrollmentsComponent,
    EnrollmentsTableComponent,
    EnrollmentDialogComponent,
  ],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule,
    SharedModule,
  ]
})
export class EnrollmentsModule { }
