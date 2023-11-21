import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnrollmentsTableComponent } from './enrollments-table/enrollments-table.component';
import { EnrollmentDialogComponent } from './enrollment-dialog/enrollment-dialog.component';
import { enrollmentFeature } from './store/enrollment.reducer';
import { EnrollmentEffects } from './store/enrollment.effects';


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
