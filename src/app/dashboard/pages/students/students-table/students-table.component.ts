import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/model';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent {

  titleFontSize: string = '30px'

  @Input()
  table: Array<Student> = []

  @Output()
  updateStudent = new EventEmitter<Student>();

  @Output()
  desactivateStudent = new EventEmitter<string>();

  displayedColumns: string[] = ['id', /*'name', 'surname',*/ 'fullname', 'dob', 'actions'];

}
