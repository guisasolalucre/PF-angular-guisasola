import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../model/Student';
import { IEnrollment } from '../../enrollments/model/IEnrollment';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EnrollmentActions } from '../../enrollments/store/enrollment.actions';
import { enrollments } from '../../enrollments/store/enrollment.selectors';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {

  id: string
  student?: Student

  displayedColumns: string[] = ['course', 'startDate', 'teacher', 'actions'];
  dataSource: IEnrollment[] = []
  courses: Observable<IEnrollment[]>
  
  constructor(
    public activatedRoute: ActivatedRoute,
    public studentService: StudentService,
    private store: Store,
  ) {
    this.id = this.activatedRoute.snapshot.params['id']

    this.studentService.getById(this.id)
      .subscribe(s => this.student = s[0])

    this.store.dispatch(EnrollmentActions.loadEnrollmentsByStudent({
      id: this.id
    }));
    this.courses = this.store.select(enrollments)
  }

}
