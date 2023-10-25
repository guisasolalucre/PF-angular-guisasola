import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { HomeModule } from './pages/home/home.module';
import { StudentsModule } from './pages/students/students.module';

import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ToolbarComponent,
    CoursesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatMenuModule,
    HomeModule,
    StudentsModule,
    RouterModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
