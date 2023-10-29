import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { courses } from 'src/app/data/courses';
import { Course } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  coursesList: Course[] = courses

  constructor() { }

  getCourses$(): Observable<Course[]>{
    return of(courses);
  }
  
  createCourse$(course: Course): Observable<Course[]> {
    this.coursesList.push(course)
    return of([...this.coursesList]);
  }

  updateCourse$(idE: string, object: any): Observable<Course[]> {
    const student: Course = {
      id: idE,
      name: object.name,
      startDate: object.startDate,
      endDate: object.endDate,
    }
    return of(
      this.coursesList.map((c) => (c.id === idE ? { ...c, ...student } : c))
    )
  }

  getCourseById$(id: string): Observable<Course | undefined> {
    return of(this.coursesList.find((c) => c.id === id));
  }

}
