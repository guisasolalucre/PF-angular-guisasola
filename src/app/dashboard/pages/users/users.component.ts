import { Component } from '@angular/core';
import { User } from './model/User';
import { UsersService } from './users.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { nanoid } from 'nanoid';
import { Role } from './model/enums';
import { Store } from '@ngrx/store';
import { UserActions } from './store/user.actions';
import { isLoadingUsers, usersSelector } from './store/user.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: User[] = []

  isLoading: boolean = true

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog,
    private store: Store,
  ) {
    
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers())
    this.store.select(usersSelector).subscribe(
      (users) => this.users = users
    )
    this.store.select(isLoadingUsers).subscribe(
      (isLoading) => this.isLoading = isLoading
    )
  }

  onAddUser(): void {
    this.dialog
      .open(UserDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            let payload: User = {
              id: nanoid(5),
              username: result.username,
              password: result.password,
              role: Role[1],
              token: nanoid(25)
            }
            this.store.dispatch(UserActions.createUser({payload}))
          }
        }
      })
  }

  onDeleteUser(id: string): void {
    this.usersService.filterAdmin().subscribe(
      admins => {
        this.usersService.getById(id).subscribe(
          users => { 
            let user = users[0]
            if( (admins.length === 1) && (user.role === Role[0])){
              Swal.fire({
                icon: "error",
                text: "There has to be at least one admin",
                heightAuto: false,
              });
            } else {
              Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                heightAuto: false,
              }).then((result) => {
                if (result.isConfirmed) {
                  this.store.dispatch(UserActions.deleteUser({id}))
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
          }
        )
      }
    )
  }

  onChangeRole(id: string): void {
    this.usersService.filterAdmin().subscribe(
      admins => {
        this.usersService.getById(id).subscribe(
          users => { 
            let user = users[0]
            if( (admins.length === 1) && (user.role === Role[0])){
              Swal.fire({
                icon: "error",
                text: "There has to be at least one admin",
                heightAuto: false,
              });
            } else {
              this.store.dispatch(UserActions.changeUserRole({id}))
            }
          }
        )
      }
    )
  }

}
