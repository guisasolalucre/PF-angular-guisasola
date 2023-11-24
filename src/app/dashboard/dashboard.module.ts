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
import { ClockComponent } from './components/clock/clock.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { StoreModule } from '@ngrx/store';
import { enrollmentFeature } from './pages/enrollments/store/enrollment.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EnrollmentEffects } from './pages/enrollments/store/enrollment.effects';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ToolbarComponent,
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
    DashboardRoutingModule,
    StoreModule.forFeature('enrollment', enrollmentFeature.reducer),
    EffectsModule.forFeature([EnrollmentEffects]),
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
