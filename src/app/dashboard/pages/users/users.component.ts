import { Component } from '@angular/core';
import { User } from './model/User';
import { UsersService } from './users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

    users: User[] = []

    constructor(
      public usersService: UsersService,
    ) {
      this.usersService.getUsers().subscribe(
        (data: User[]) => {
          this.users = data;
        },
      );
    }

    
    onChangeRole(id: string): void {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        heightAuto: false,
      }).then((result) => {
        if (result.isConfirmed) {
          this.usersService.changeRole(id).subscribe(
            (data: User[]) => {
              this.users = data;
            },
          )
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
