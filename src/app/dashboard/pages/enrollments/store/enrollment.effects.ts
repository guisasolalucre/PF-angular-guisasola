import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, forkJoin, of } from 'rxjs';
import { EnrollmentActions } from './enrollment.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { IEnrollment } from '../model/IEnrollment';
import { Course } from '../../courses/model/Course';
import { Student } from '../../students/model/Student';


@Injectable()
export class EnrollmentEffects {

  loadEnrollments$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(EnrollmentActions.loadEnrollments),

      concatMap(() =>

        this.getEnrollments().pipe(
          map((data) =>
            EnrollmentActions.loadEnrollmentsSuccess({ data })
          ),

          catchError((error) =>
            of(EnrollmentActions.loadEnrollmentsFailure({ error }))
          )
        )
      )
    );
  });


  loadEnrollmentsDialogOptions$ = createEffect(() => this.actions$.pipe(
    ofType(EnrollmentActions.loadEnrollmentDialogOptions),

    concatMap(() =>
      this.getEnrollmentDialogOptions().pipe(
        map((r) =>
          EnrollmentActions.loadEnrollmentDialogOptionsSuccess(r)
        ),
        catchError((e) =>
          of(EnrollmentActions.loadEnrollmentDialogOptionsFailure({ error: e }))
        )
      ))
  ));


  createEnrollment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrollmentActions.createEnrollment),
      concatMap((action) =>
        this.createEnrollment(action.payload).pipe(
          switchMap(() => {
            switch (action.source) {
              case 'student':
                return of(EnrollmentActions.loadEnrollmentsByStudent({ id: action.payload.studentId }));
              case 'course':
                return of(EnrollmentActions.loadEnrollmentsByCourse({ id: action.payload.courseId }));
              default:
                return of(EnrollmentActions.loadEnrollments());
            }
          }),
          catchError((error) =>
            of(EnrollmentActions.createEnrollmentFailure({ error }))
          )
        )
      )
    )
  );


  deleteEnrollment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrollmentActions.deleteEnrollment),
      concatMap((action) =>
        this.deleteEnrollment(action.id).pipe(
          switchMap(() => {
            switch (action.source) {
              case 'student':
                return of(EnrollmentActions.loadEnrollmentsByStudent({ id: action.sourceId }));
              case 'course':
                return of(EnrollmentActions.loadEnrollmentsByCourse({ id: action.sourceId }));
              default:
                return of(EnrollmentActions.loadEnrollments());
            }
          }),
          catchError((error) =>
            of(EnrollmentActions.deleteEnrollmentFailure({ error }))
          )
        )
      )
    )
  )


  loadEnrollmentsByStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrollmentActions.loadEnrollmentsByStudent),

      concatMap((action) =>
        this.getEnrollmentsByStudent(action.id).pipe(
          map((r) =>
            EnrollmentActions.loadEnrollmentsByStudentSuccess({ data: r })),
          catchError((e) =>
            of(EnrollmentActions.loadEnrollmentsByStudentFailure({ error: e })))
        ))
    ));


  loadEnrollmentsByCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrollmentActions.loadEnrollmentsByCourse),

      concatMap((action) =>
        this.getEnrollmentsByCourse(action.id).pipe(
          map((r) =>
            EnrollmentActions.loadEnrollmentsByCourseSuccess({ data: r })),
          catchError((e) =>
            of(EnrollmentActions.loadEnrollmentsByCourseFailure({ error: e })))
        ))
    ));


  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
  ) { }

  getEnrollments(): Observable<IEnrollment[]> {
    return this.httpClient.get<IEnrollment[]>(
      `${environment.baseUrl}/enrollments?_expand=course&_expand=student`
    );
  }

  getEnrollmentDialogOptions(): Observable<{
    courses: Course[],
    students: Student[]
  }> {
    return forkJoin([
      this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`),
      this.httpClient.get<Student[]>(`${environment.baseUrl}/students`),
    ]).pipe(
      map((resp) => {
        return {
          courses: resp[0],
          students: resp[1]
        }
      })
    )

  }

  createEnrollment(payload: IEnrollment): Observable<IEnrollment> {
    return this.httpClient.post<IEnrollment>(`${environment.baseUrl}/enrollments`, payload)
  }

  deleteEnrollment(id: string): Observable<null> {
    return this.httpClient.delete<null>(`${environment.baseUrl}/enrollments/${id}`)
  }

  getEnrollmentsByStudent(studentId: string): Observable<IEnrollment[]> {
    return this.httpClient.get<IEnrollment[]>(
      `${environment.baseUrl}/enrollments?studentId=${studentId}&_expand=course`
    );
  }

  getEnrollmentsByCourse(courseId: string): Observable<IEnrollment[]> {
    return this.httpClient.get<IEnrollment[]>(
      `${environment.baseUrl}/enrollments?courseId=${courseId}&_expand=student`
    );
  }

}
