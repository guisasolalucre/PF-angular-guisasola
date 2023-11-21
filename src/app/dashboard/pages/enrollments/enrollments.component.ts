import { Component } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { IEnrollment } from './model/IEnrollment';
import { Store } from '@ngrx/store';
import { authUser } from 'src/app/store/auth/auth.selectors';
import { User } from '../users/model/User';
import { enrollments, enrollmentsIsLoading } from './store/enrollments/enrollment.selectors';
import { EnrollmentActions } from './store/enrollments/enrollment.actions';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentDialogComponent } from './enrollment-dialog/enrollment-dialog.component';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent {

  enrollments$: Observable<IEnrollment[]>

  isLoading$: Observable<boolean>

  constructor(
    private dialog: MatDialog,
    private store: Store,
  ){
    this.store.dispatch(EnrollmentActions.loadEnrollments());
    this.isLoading$ = this.store.select(enrollmentsIsLoading)
    this.enrollments$ = this.store.select(enrollments)
  }

  onNewEnrollment(): void {
    this.dialog.open(EnrollmentDialogComponent)
      .afterClosed().subscribe((result) => {
        if (!!result) {
          
        }
      })
  }

}
