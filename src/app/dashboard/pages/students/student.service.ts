import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { Student } from './model/Student';
import { environment } from 'src/environments/environment.local';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { IEnrollment } from '../enrollments/model/IEnrollment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl: string = environment.baseUrl;
  private studentsUrl: string = environment.baseUrl + '/students';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.studentsUrl)
  }

  getById(id: string): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.studentsUrl}?id=${id}`)
  }

  createStudent(student: Student): Observable<Student[]> {
    return this.httpClient.post<Student>(`${this.studentsUrl}`, student)
      .pipe(switchMap(() => this.getStudents()));
  }

  deleteStudent(id: string): Observable<Student[]> {
    return this.httpClient.delete(`${this.studentsUrl}/${id}`)
      .pipe(switchMap(() => this.getStudents()));
  }

  updateStudent(id: string, student: Student): Observable<Student[]> {
    return this.httpClient.put<Student>(`${this.studentsUrl}/${id}`, student)
      .pipe(switchMap(() => this.getStudents()));
  }

  changeStatus(id: string): Observable<Student[]> {
    return this.getById(id).pipe(
      switchMap(students => {
        let student = students[0]
        let changedStudent = { ...student, active: !student.active };

        return this.httpClient.put<Student>(`${this.studentsUrl}/${id}`, changedStudent)
        .pipe(switchMap(() => this.getStudents()));
      })
    );
  }

  studentExistsByIdNumber(id: string, idnumber: number): Observable<boolean> {
    return this.httpClient.get<Student[]>(`${this.studentsUrl}`).pipe(
      map(students => {
        let filtered = students.filter(s => s.id !== id);
        return filtered.some(s => s.idnumber === idnumber);
      })
    );
  }

  studentExistsByEmail(id: string, email: string): Observable<boolean> {
    return this.httpClient.get<Student[]>(`${this.studentsUrl}`).pipe(
      map(students => {
        let filtered = students.filter(s => s.id !== id);
        return filtered.some(s => s.email === email);
      })
    );
  }

  sendEmail(id: string): void{
    this.getById(id).subscribe( students => {
      
        let student = students[0]

        Swal.fire({
          text:'Email has been sent to ' + student.email,
          icon: 'success',
          confirmButtonText: 'OK',
          heightAuto: false,
          timer: 1500,
          timerProgressBar:true,
        })
      })

    
  }

  getEnrollments(id: string): Observable<IEnrollment[]> {
    return this.httpClient.get<IEnrollment[]>(
      `${environment.baseUrl}/enrollments?studentId=${id}&_expand=course`
    );
  }
}
