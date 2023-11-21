import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, take } from 'rxjs';
import { Course } from '../../courses/model/Course';
import { Student } from '../../students/model/Student';
import { Actions, ofType } from '@ngrx/effects';
import { MatDialogRef } from '@angular/material/dialog';
import { nanoid } from 'nanoid';
import { IEnrollment } from '../model/IEnrollment';
import { EnrollmentActions } from '../store/enrollment.actions';
import { courses, students } from '../store/enrollment.selectors';


@Component({
  selector: 'app-enrollment-dialog',
  templateUrl: './enrollment-dialog.component.html',
  styleUrls: ['./enrollment-dialog.component.scss']
})
export class EnrollmentDialogComponent {

  courses$: Observable<Course[]>;
  students$: Observable<Student[]>;

  enrollmentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private actions$: Actions,
    private dialogRef: MatDialogRef<EnrollmentDialogComponent>
  ) {
    this.store.dispatch(EnrollmentActions.loadEnrollmentDialogOptions())
    this.courses$ = this.store.select(courses);
    this.students$ = this.store.select(students);

    this.enrollmentForm = this.formBuilder.group({
      studentId: ['',
        [Validators.required]],
      courseId: ['',
        [Validators.required]],
    })

    this.actions$
      .pipe(ofType(EnrollmentActions.loadEnrollments), take(1))
      .subscribe({
        next: () => this.dialogRef.close(),
      });
  }

  onSubmit(): void{
      const studentIdValue = this.enrollmentForm.get('studentId')?.value;
      const courseIdValue = this.enrollmentForm.get('courseId')?.value;
      const idValue = nanoid(5)

      let payloadValue: IEnrollment = {
        id: idValue,
        studentId: studentIdValue,
        courseId: courseIdValue
      }
      
      this.store.dispatch(
        EnrollmentActions.createEnrollment({ 
          payload: payloadValue 
        })
      );
  }


  get studentIdControl() {
    return this.enrollmentForm.controls['studentId'] as FormControl;
  }

  get courseIdControl() {
    return this.enrollmentForm.controls['courseId'] as FormControl;
  }

  get studentIdControlError() {
    return this.studentIdControl.hasError('required') ?
      'Student is required' : ''
  }

  get courseIdControlError(): string {
    return this.courseIdControl.hasError('required') ?
      'Course is required' : ''
  }
}

