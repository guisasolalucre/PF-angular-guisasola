import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IEnrollment } from '../model/IEnrollment';
import { Course } from '../../courses/model/Course';
import { Student } from '../../students/model/Student';


export const EnrollmentActions = createActionGroup({
  source: 'Enrollment',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: IEnrollment[] }>(),
    'Load Enrollments Failure': props<{ error: unknown }>(),

    'Load Enrollment Dialog Options': emptyProps(),
    'Load Enrollment Dialog Options Success': props<{
      courses: Course[],
      students: Student[]
    }>(),
    'Load Enrollment Dialog Options Failure': props<{ error: unknown }>(),

    'Create Enrollment': props<{ payload: IEnrollment; source: string }>(),
    'Create Enrollment Failure': props<{ error: unknown }>(),

    'Delete Enrollment': props<{ id: string; source: string; sourceId: string }>(),
    'Delete Enrollment Failure': props<{ error: unknown }>(),

    'Load Enrollments By Student': props<{ id: string }>(),
    'Load Enrollments By Student Success': props<{ data: IEnrollment[] }>(),
    'Load Enrollments By Student Failure': props<{ error: unknown }>(),

    'Load Enrollments By Course': props<{ id: string }>(),
    'Load Enrollments By Course Success': props<{ data: IEnrollment[] }>(),
    'Load Enrollments By Course Failure': props<{ error: unknown }>(),

  }
});
