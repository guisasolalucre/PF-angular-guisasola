import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Course } from "../model/Course";

export const CourseActions = createActionGroup({
   source: 'Course',
   events: {

      'Load Courses': emptyProps(),
      'Load Courses Success': props<{ data: Course[] }>(),
      'Load Courses Failure': props<{ error: unknown }>(),

      'Create Course': props<{ payload: Course }>(),
      'Create Course Failure': props<{ error: unknown }>(), 

      'Update Course': props<{ id: string, payload: Course }>(),
      'Update Course Failure': props<{ error: unknown }>(), 

      'Delete Course': props<{ id: string }>(),
      'Delete Course Failure': props<{ error: unknown }>(), 
   }
});
