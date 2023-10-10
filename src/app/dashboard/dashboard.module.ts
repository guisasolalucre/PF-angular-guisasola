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
import { SidebarComponent } from './dashboard-components/sidebar/sidebar.component';
import { ToolbarComponent } from './dashboard-components/toolbar/toolbar.component';
import { ContentComponent } from './dashboard-components/content/content.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ToolbarComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    HomeModule,
    MatNativeDateModule,
    MatToolbarModule,
    StudentsModule,
    MatMenuModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
