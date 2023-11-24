import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCourse from './course.reducer';


export const courseState = createFeatureSelector<fromCourse.State>(
   fromCourse.courseFeatureKey
);

export const coursesSelector = createSelector(
   courseState,
   (state) => state.courses
);

export const isLoadingCourses = createSelector(
   courseState,
   (state) => state.isLoading
);