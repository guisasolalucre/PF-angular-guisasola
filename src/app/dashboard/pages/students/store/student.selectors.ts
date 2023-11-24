import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudent from './student.reducer';


export const studentState = createFeatureSelector<fromStudent.State>(
   fromStudent.studentFeatureKey
);

export const studentsSelector = createSelector(
   studentState,
   (state) => state.students
);

export const isLoadingStudents = createSelector(
   studentState,
   (state) => state.isLoading
);