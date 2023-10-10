import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { StudentFormDialogComponent } from '../student-form-dialog/student-form-dialog.component';
import { StudentsTableComponent } from '../students-table/students-table.component';


@NgModule({
  declarations: [
    HomeComponent,
    StudentFormDialogComponent,
    StudentsTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatDatepickerModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
