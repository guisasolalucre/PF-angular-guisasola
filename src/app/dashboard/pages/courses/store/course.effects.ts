import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CourseActions } from "./course.actions";
import { catchError, concatMap, map, of } from "rxjs";
import { CourseService } from "../course.service";

@Injectable()
export class CourseEffects {

   loadCourses$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(CourseActions.loadCourses),
         concatMap(() =>
            this.service.getCourses().pipe(
               map((data) =>
                  CourseActions.loadCoursesSuccess({ data })
               ),
               catchError((error) =>
                  of(CourseActions.loadCoursesFailure({ error }))
               )
            )
         )
      );
   });

   createCourse$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(CourseActions.createCourse),
         concatMap((action) =>
            this.service.createCourse(action.payload).pipe(
               map(() =>
                  CourseActions.loadCourses()
               ),
               catchError((error) =>
                  of(CourseActions.createCourseFailure({ error }))
               )
            )
         )
      );
   });

   updateCourse$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(CourseActions.updateCourse),
         concatMap((action) =>
            this.service.updateCourse(action.id, action.payload).pipe(
               map(() =>
                  CourseActions.loadCourses()
               ),
               catchError((error) =>
                  of(CourseActions.updateCourseFailure({ error }))
               )
            )
         )
      );
   });

   deleteCourse$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(CourseActions.deleteCourse),
         concatMap((action) =>
            this.service.deleteCourse(action.id).pipe(
               map(() =>
                  CourseActions.loadCourses()
               ),
               catchError((error) =>
                  of(CourseActions.deleteCourseFailure({ error }))
               )
            )
         )
      );
   });

   constructor(
      private actions$: Actions,
      private service: CourseService,
   ) { }
}
