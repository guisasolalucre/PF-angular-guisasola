import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { Course } from './model/Course';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseURL: string = environment.baseUrl + '/courses';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseURL)
  }

  getById(id: string): Observable<Course> {
    return this.httpClient.get<Course>(`${this.baseURL}?id=${id}`)
  }

  createCourse(course: Course): Observable<Course[]> {
    return this.httpClient.post<Course>(`${this.baseURL}`, course)
      .pipe(switchMap(() => this.getCourses()));
  }

  updateCourse(id: string, course: Course): Observable<Course[]> {
    return this.httpClient.put<Course>(`${this.baseURL}/${id}`, course)
      .pipe(switchMap(() => this.getCourses()));
  }

}
