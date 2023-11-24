import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './model/Course';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { CourseName, Teacher } from './model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl: string = environment.baseUrl;
  private coursesUrl: string = environment.baseUrl + '/courses';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.coursesUrl)
  }

  getById(id: string): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.coursesUrl}?id=${id}`)
  }

  createCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(`${this.coursesUrl}`, course)
  }

  updateCourse(id: string, course: Course): Observable<Course> {
    return this.httpClient.put<Course>(`${this.coursesUrl}/${id}`, course)
  }

  deleteCourse(id: string): Observable<null> {
    return this.httpClient.delete<null>(`${this.coursesUrl}/${id}`)
  }


  getCoursesNames(): Observable<CourseName[]> {
    return this.httpClient.get<CourseName[]>(`${this.baseUrl}/coursesNames`)
  }

  getTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(`${this.baseUrl}/teachers`)
  }

  addCourseName(name: CourseName): Observable<CourseName[]> {
    return this.httpClient.post<CourseName[]>(`${this.baseUrl}/coursesNames`, name)
  }

  addTeacher(teacher: Teacher): Observable<Teacher[]> {
    return this.httpClient.post<Teacher[]>(`${this.baseUrl}/teachers`, teacher);
  }
}
