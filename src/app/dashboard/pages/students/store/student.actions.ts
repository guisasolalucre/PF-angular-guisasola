import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Student } from "../model/Student";

export const StudentActions = createActionGroup({
   source: 'Student',
   events: {

      'Load Students': emptyProps(),
      'Load Students Success': props<{ data: Student[] }>(),
      'Load Students Failure': props<{ error: unknown }>(),

      'Create Student': props<{ payload: Student }>(),
      'Create Student Failure': props<{ error: unknown }>(), 

      'Update Student': props<{ id: string, payload: Student }>(),
      'Update Student Failure': props<{ error: unknown }>(), 

      'Delete Student': props<{ id: string }>(),
      'Delete Student Failure': props<{ error: unknown }>(), 
   }
});
