import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {

  id: string
  student: Student | undefined

  displayedColumns: string[] = ['position', 'course', 'average'];
  dataSource = [];

  // no se como hacer para que se escuche este evento en students-table
  // y de ahi pase a students-content
  // tal vez tengo que hacer un metodo en el servicio para abrir el dialog???
  @Output()
  updateStudent = new EventEmitter<Student>();

  constructor(
    public activatedRoute: ActivatedRoute,
    public studentService: StudentService,
    ) {
    this.id = this.activatedRoute.snapshot.params['id']
    this.studentService.getStudentById$(this.id)
      .subscribe( s => this.student = s)    
  }

  sendEmail(email: string){
    alert('Email has been sent to ' + email)
  }
  
}
