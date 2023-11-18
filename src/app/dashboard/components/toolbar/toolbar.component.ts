import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2';
import { User } from '../../pages/users/model/User';
import { authUser } from 'src/app/store/auth/auth.selectors';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PassDialogComponent } from '../../pages/users/pass-dialog/pass-dialog.component';
import { UsersService } from '../../pages/users/users.service';
import { AuthActions } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Output()
  openDrawer: EventEmitter<boolean> = new EventEmitter();

  user: User | null = null

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private userService: UsersService,
    private store: Store,
  ) {
    this.store.select(authUser).subscribe( u => this.user = u)
  }

  changePass() {
      if (this.user) {
        this.dialog
          .open(PassDialogComponent, {
            data: this.user,
          })
          .afterClosed()
          .subscribe({
            next: (result) => {
              if (!!result && this.user) {
                this.userService.changePassword(this.user.id, result)
                .subscribe((newUser => {
                  this.store.dispatch(AuthActions.setAuthUser({ data: newUser }))
                  this.store.select(authUser).subscribe( u => this.user = u)
                  Swal.fire({
                    title: 'Password changed',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    heightAuto: false,
                    timer: 1500,
                    timerProgressBar: true,
                  })
                }))
                
              }
            },
          });
      }
  }

  logout() {
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
