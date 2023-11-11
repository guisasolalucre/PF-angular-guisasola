import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Output()
  openDrawer: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private authService: AuthService,
  ){}

  logout(){
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout()
      }
    });
  }

}
