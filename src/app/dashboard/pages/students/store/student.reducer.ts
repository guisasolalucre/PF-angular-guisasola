import { createFeature, createReducer, on } from "@ngrx/store";
import { Student } from "../model/Student";
import { StudentActions } from "./student.actions";

export const studentFeatureKey = 'student';

export interface State {
   isLoading: boolean;
   students: Student[];
   error: unknown;
}

export const initialState: State = {
   isLoading: false,
   students: [],
   error: null,
};

export const reducer = createReducer(
   initialState,

   // LOAD STUDENTS
   on(StudentActions.loadStudents, (state) => (
      {
         ...state,
         isLoading: true
      }
   )),

   on(StudentActions.loadStudentsSuccess, (state, { data }) => (
      {
         ...state,
         isLoading: false,
         students: data
      }
   )),

   on(StudentActions.loadStudentsFailure, (state, { error }) => (
      {
         ...state,
         isLoading: false,
         error
      }
   )),

   // CREATE STUDENTS
   on(StudentActions.createStudent, (state) => (
      {
         ...state,
         isLoading: true
      }
   )),

   on(StudentActions.createStudentFailure, (state, { error }) => (
      {
         ...state,
         isLoading: false,
         error
      }
   )),

   // UPDATE STUDENTS
   on(StudentActions.updateStudent, (state) => (
      {
         ...state,
         isLoading: true
      }
   )),

   on(StudentActions.updateStudentFailure, (state, { error }) => (
      {
         ...state,
         isLoading: false,
         error
      }
   )),

   // DELETE STUDENTS
   on(StudentActions.deleteStudent, (state) => (
      {
         ...state,
         isLoading: true
      }
   )),

   on(StudentActions.deleteStudentFailure, (state, { error }) => (
      {
         ...state,
         isLoading: false,
         error
      }
   )),

);


export const studentFeature = createFeature({
   name: studentFeatureKey,
   reducer,
});