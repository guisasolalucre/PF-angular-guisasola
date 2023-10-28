import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeModule } from './pages/home/home.module';
import { StudentsModule } from './pages/students/students.module';
import { CoursesComponent } from './pages/courses/courses.component';
import { UsersModule } from './pages/users/users.module';
import { EnrollmentsModule } from './pages/enrollments/enrollments.module';
import { CoursesTableComponent } from './pages/courses/courses-table/courses-table.component';
import { CourseDialogComponent } from './pages/courses/course-dialog/course-dialog.component';
import { CourseDetailComponent } from './pages/courses/course-detail/course-detail.component';
import { CoursesContentComponent } from './pages/courses/courses-content/courses-content.component';
import { ClockComponent } from './components/clock/clock.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ToolbarComponent,
    CoursesComponent,
    CoursesTableComponent,
    CourseDialogComponent,
    CourseDetailComponent,
    CoursesContentComponent,
    ClockComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule,
    HomeModule,
    StudentsModule,
    UsersModule,
    EnrollmentsModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
