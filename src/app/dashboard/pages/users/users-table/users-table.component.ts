import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {

  displayedColumns: string[] = ['id', 'username', 'adminCheck', 'actions'];

  @Input()
  table: User[] = [];

  @Output()
  changeRole = new EventEmitter<string>();

  @Output()
  deleteUser = new EventEmitter<string>();

  authUser: User | null = null

  constructor(
    private authService: AuthService,
  ){
    this.authService.authUser$.subscribe((user: User | null) => {
      this.authUser = user;
    });
  }

}
