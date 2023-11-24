import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StudentActions } from "./student.actions";
import { catchError, concatMap, map, of } from "rxjs";
import { StudentService } from "../student.service";

@Injectable()
export class StudentEffects {

   loadStudents$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(StudentActions.loadStudents),
         concatMap(() =>
            this.service.getStudents().pipe(
               map((data) =>
                  StudentActions.loadStudentsSuccess({ data })
               ),
               catchError((error) =>
                  of(StudentActions.loadStudentsFailure({ error }))
               )
            )
         )
      );
   });

   createStudent$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(StudentActions.createStudent),
         concatMap((action) =>
            this.service.createStudent(action.payload).pipe(
               map(() =>
                  StudentActions.loadStudents()
               ),
               catchError((error) =>
                  of(StudentActions.createStudentFailure({ error }))
               )
            )
         )
      );
   });

   updateStudent$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(StudentActions.updateStudent),
         concatMap((action) =>
            this.service.updateStudent(action.id, action.payload).pipe(
               map(() =>
                  StudentActions.loadStudents()
               ),
               catchError((error) =>
                  of(StudentActions.updateStudentFailure({ error }))
               )
            )
         )
      );
   });

   deleteStudent$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(StudentActions.deleteStudent),
         concatMap((action) =>
            this.service.deleteStudent(action.id).pipe(
               map(() =>
                  StudentActions.loadStudents()
               ),
               catchError((error) =>
                  of(StudentActions.deleteStudentFailure({ error }))
               )
            )
         )
      );
   });

   constructor(
      private actions$: Actions,
      private service: StudentService,
   ) { }
}