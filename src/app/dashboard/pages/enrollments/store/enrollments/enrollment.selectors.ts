import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrollment from './enrollment.reducer';

export const enrollmentState = createFeatureSelector<fromEnrollment.State>(
  fromEnrollment.enrollmentFeatureKey
);

export const enrollments = createSelector(
  enrollmentState,
  (state) => state.enrollments
);

export const enrollmentsIsLoading = createSelector(
  enrollmentState,
  (state) => state.isLoading
);

export const courses = createSelector(
  enrollmentState,
  (state) => state.courses
)

export const students = createSelector(
  enrollmentState,
  (state) => state.students
)