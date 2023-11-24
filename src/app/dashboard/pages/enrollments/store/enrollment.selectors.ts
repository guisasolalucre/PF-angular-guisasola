import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrollment from './enrollment.reducer';

export const enrollmentState = createFeatureSelector<fromEnrollment.State>(
  fromEnrollment.enrollmentFeatureKey
);

export const enrollmentsSelector = createSelector(
  enrollmentState,
  (state) => state.enrollments
);

export const isLoadingEnrollments = createSelector(
  enrollmentState,
  (state) => state.isLoading
);

export const enrollmentCourses = createSelector(
  enrollmentState,
  (state) => state.courses
)

export const enrollmentStudents = createSelector(
  enrollmentState,
  (state) => state.students
)