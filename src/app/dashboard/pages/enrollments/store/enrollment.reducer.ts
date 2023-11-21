import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { IEnrollment } from '../model/IEnrollment';
import { Course } from '../../courses/model/Course';
import { Student } from '../../students/model/Student';


export const enrollmentFeatureKey = 'enrollment';

export interface State {
  isLoading: boolean;
  enrollments: IEnrollment[];
  error: unknown;
  isLoadingOptions: boolean;
  courses: Course[];
  students: Student[];
}

export const initialState: State = {
  isLoading: false,
  enrollments: [],
  error: null,
  isLoadingOptions: false,
  courses: [],
  students: [],
};

export const reducer = createReducer(
  initialState,

  // LOAD ENROLLMENTS
  on(EnrollmentActions.loadEnrollments, (state) => (
    {
      ...state,
      isLoading: true
    }
  )),

  on(EnrollmentActions.loadEnrollmentsSuccess, (state, { data }) => (
    {
      ...state,
      isLoading: false,
      enrollments: data
    }
  )),

  on(EnrollmentActions.loadEnrollmentsFailure, (state, { error }) => (
    {
      ...state,
      isLoading: false,
      error
    }
  )),


  // LOAD ENROLLMENT DIALOG OPTIONS
  on(EnrollmentActions.loadEnrollmentDialogOptions, (state) => (
    {
      ...state,
      isLoadingOptions: true,
    }
  )),

  on(EnrollmentActions.loadEnrollmentDialogOptionsSuccess, (state, action) => (
    {
      ...state,
      isLoadingOptions: true,
      courses: action.courses,
      students: action.students,
    }
  )),

  on(EnrollmentActions.loadEnrollmentDialogOptionsFailure, (state, { error }) => (
    {
      ...state,
      isLoadingOptions: true,
      error,
    }
  )),


  // CREATE ENROLLMENT
  on(EnrollmentActions.createEnrollment, (state) => (
    {
      ...state,
      isLoading: true
    }
  )),

  on(EnrollmentActions.loadEnrollmentsFailure, (state, { error }) => (
    {
      ...state,
      isLoading: false,
      error
    }
  )),


  // DELETE ENROLLMENT
  on(EnrollmentActions.deleteEnrollment, (state) => (
    {
      ...state,
      isLoading: true
    }
  )),

  on(EnrollmentActions.deleteEnrollmentFailure, (state, { error }) => (
    {
      ...state,
      isLoading: false,
      error
    }
  )),


  // LOAD ENROLLMENTS BY STUDENT
  on(EnrollmentActions.loadEnrollmentsByStudent, (state) => (
    {
      ...state,
      isLoading: true
    }
  )),

  on(EnrollmentActions.loadEnrollmentsByStudentSuccess, (state, { data }) => (
    {
      ...state,
      isLoading: true,
      enrollments: data
    }
  )),

  on(EnrollmentActions.loadEnrollmentsByStudentFailure, (state, { error }) => (
    {
      ...state,
      isLoading: false,
      error
    }
  )),


  // LOAD ENROLLMENTS COURSES
  on(EnrollmentActions.loadEnrollmentsCourses, (state) => (
    {
      ...state,
      isLoading: true
    }
  )),

  on(EnrollmentActions.loadEnrollmentsCoursesFailure, (state, { error }) => (
    {
      ...state,
      isLoading: false,
      error
    }
  )),

);


export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});

