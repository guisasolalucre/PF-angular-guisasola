import { Component } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { IEnrollment } from './model/IEnrollment';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentDialogComponent } from './enrollment-dialog/enrollment-dialog.component';
import { EnrollmentActions } from './store/enrollment.actions';
import { enrollments, enrollmentsIsLoading } from './store/enrollment.selectors';


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
