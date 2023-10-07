import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AddStudentDialogComponent } from './pages/add-student-dialog/add-student-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    DashboardComponent,
    AddStudentDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    HomeModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
