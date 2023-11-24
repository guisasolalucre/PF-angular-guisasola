import { createFeature, createReducer, on } from "@ngrx/store";
import { Course } from "../model/Course";
import { CourseActions } from "./course.actions";

export const courseFeatureKey = 'course';

export interface State {
   isLoading: boolean;
   courses: Course[];
   error: unknown;
}

export const initialState: State = {
   isLoading: false,
   courses: [],
   error: null,
};

export const reducer = createReducer(
   initialState,

   // LOAD COURSES
   on(CourseActions.loadCourses, (state) => (
      {
         ...state,
         isLoading: true
      }
   )),

   on(CourseActions.loadCoursesSuccess, (state, { data }) => (
      {
         ...state,
         isLoading: false,
         courses: data
      }
   )),

   on(CourseActions.loadCoursesFailure, (state, { error }) => (
      {
         ...state,
         isLoading: false,
         error
      }
   )),

   // CREATE COURSE
   on(CourseActions.createCourse, (state) => (
      {
         ...state,
         isLoading: true
      }
   )),

   on(CourseActions.createCourseFailure, (state, { error }) => (
      {
         ...state,
         isLoading: false,
         error
      }
   )),

   // UPDATE COURSE
   on(CourseActions.updateCourse, (state) => (
      {
         ...state,
         isLoading: true
      }
   )),

   on(CourseActions.updateCourseFailure, (state, { error }) => (
      {
         ...state,
         isLoading: false,
         error
      }
   )),

   // DELETE COURSE
   on(CourseActions.deleteCourse, (state) => (
      {
         ...state,
         isLoading: true
      }
   )),

   on(CourseActions.deleteCourseFailure, (state, { error }) => (
      {
         ...state,
         isLoading: false,
         error
      }
   )),

);


export const courseFeature = createFeature({
   name: courseFeatureKey,
   reducer,
});