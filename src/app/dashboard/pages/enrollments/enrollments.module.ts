import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { EnrollmentEffects } from './store/enrollments/enrollment.effects';
import { StoreModule } from '@ngrx/store';
import { enrollmentFeature } from './store/enrollments/enrollment.reducer';
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
    StoreModule.forFeature('enrollment', enrollmentFeature.reducer),
    EffectsModule.forFeature([EnrollmentEffects]),
  ]
})
export class EnrollmentsModule { }
