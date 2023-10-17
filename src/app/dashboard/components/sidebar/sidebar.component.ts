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


  toggle(){this.open = !this.open}


  //! FALTA VALIDACION:
  //? QUE SE QUIERA DAR DE ALTA UN ESTUDIANTE QUE YA EXISTA POR DNI O EMAIL





}
