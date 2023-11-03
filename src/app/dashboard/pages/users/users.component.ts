import { Component } from '@angular/core';
import { User } from './model/User';
import { UsersService } from './users.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { nanoid } from 'nanoid';
import { Role } from './model/enums';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: User[] = []

  constructor(
    public usersService: UsersService,
    public dialog: MatDialog,
  ) {
    this.usersService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
    );
  }

  onAddUser(): void {
    this.dialog
      .open(UserDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.usersService.createUser({
              id: nanoid(5),
              username: result.username,
              password: result.password,
              role: Role[1],
              token: nanoid(25)
            }).subscribe(
              (data: User[]) => {
                this.users = data;
              },
            )
          }
        }
      })
  }

  onDeleteUser(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.deleteUser(id).subscribe(
          (data: User[]) => {
            this.users = data;
          },
        )
        Swal.fire({
          title: 'Deleted!',
          text: "The user has been deleted",
          icon: 'success',
          confirmButtonText: 'OK',
          heightAuto: false,
          timer: 1500,
          timerProgressBar: true,
        })
      }
    })
  }

  onChangeRole(id: string): void {
    this.usersService.changeRole(id).subscribe(
      (data: User[]) => {
        this.users = data;
      },)
  }

}
