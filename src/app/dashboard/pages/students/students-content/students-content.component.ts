import { Component } from '@angular/core';
import { StudentFormDialogComponent } from '../student-form-dialog/student-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/dashboard/pages/students/student.service';
import { Student } from 'src/app/model';
import { Observable } from 'rxjs';
import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-students-content',
  templateUrl: './students-content.component.html',
  styleUrls: ['./students-content.component.scss']
})
export class StudentsContentComponent {

  allStudents$: Observable<Student[]>

  constructor(
    public dialog: MatDialog,
    public studentService: StudentService,
  ) {
      this.allStudents$ = studentService.getStudents$();
  }

  onAddStudent(): void {
    this.dialog
      .open(StudentFormDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.allStudents$ = this.studentService.createStudent$({
              id: nanoid(5),
              idnumber: result.idnumber,
              active: true,
              name: result.name,
              surname: result.surname,
              dob: result.dob,
              email: result.email,
            });            
          }
        }
      })
  }

  onUpdateStudent(student: Student): void {

    this.dialog
      .open(StudentFormDialogComponent, {
        data: student,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {

          if (!!result) {
            this.allStudents$ = this.studentService.updateStudent$(student.id, result);
          }
        }
      })
  }

  onDesactivateStudent(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      heightAuto: false,
      customClass:{
        //!! NO ENTENDÍ CÓMO COMBINAR LOS ESTILOS DE MATERIAL Y SWAL
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.allStudents$ = this.studentService.desactivateStudent$(id)
        Swal.fire({
          title: 'Done!',
          icon: 'success',
          confirmButtonText: 'OK',
          heightAuto: false,
          timer: 1500,
          timerProgressBar:true,
        })
      }
    })
  } 

}
