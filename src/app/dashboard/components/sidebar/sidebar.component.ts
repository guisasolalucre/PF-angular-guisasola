import { Component} from '@angular/core';
import { StudentFormDialogComponent } from '../../pages/students/student-form-dialog/student-form-dialog.component';
import { Student } from 'src/app/model';
import { StudentService } from 'src/app/services/student.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  open = true

  page: string = 'home';

  allStudents: Array<Student> = [];
  activeStudents: Array<Student> = [];
  desactiveStudents: Array<Student> = [];

  
  constructor(
    public dialog: MatDialog,

    public studentService: StudentService,

  ) { 

    this.allStudents = this.studentService.getStudents();
    this.activeStudents = this.allStudents.filter((s) => s.active);
    this.desactiveStudents = this.allStudents.filter((s) => !s.active);

  }


  toggle(){this.open = !this.open}


  onAddStudent(): void {
    this.dialog
      .open(StudentFormDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            const newStudent = this.studentService.createStudent(result);
            this.allStudents.push(newStudent);
            this.activeStudents = this.allStudents.filter((s) => s.active);
            console.log(this.allStudents);
            
          }
        }
      })
  }

  onUpdateStudent(student: Student): void{
    this.dialog
      .open(StudentFormDialogComponent, {
        data: student,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            const newStudent = this.studentService.createStudent(result);
                        
            this.allStudents = this.allStudents.map( (s) =>
              s.id === newStudent.id ? {...s, ...newStudent} : s)

            this.activeStudents = this.allStudents.filter((s) => s.active);
          }
        }
      })
  }

  onDesactivateStudent(id: string): void{
    if (confirm('Esta seguro?')) {
      const student = this.allStudents.find((s) => s.id === id)
      if(!!student){
        this.studentService.desactivateStudent(student)
        this.activeStudents = this.allStudents.filter((s) => s.active);
        this.desactiveStudents = this.allStudents.filter((s) => !s.active);
      }
    }
  }


  // TODO ----------------------------------------------------------------
  //! FALTAN VALIDACIONES PARA LOS CASOS:
  //? QUE SE QUIERA DAR DE ALTA UN ESTUDIANTE QUE YA EXISTA POR DNI O EMAIL
  //* QUE NO SE PUEDA MODIFICAR EL DNI CUANDO SE HACE UPDATE
  // TODO ----------------------------------------------------------------





}
