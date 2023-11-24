import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../model/User';
import { Store } from '@ngrx/store';
import { authUser } from 'src/app/store/auth/auth.selectors';

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
    private store: Store,
  ){
    this.store.select(authUser).subscribe((user: User | null) => {
      this.authUser = user;
    })
  }

  isTestUser(user: User): boolean {
    return (user.id !== 'Bi6_2' && user.id !== 'Hl9d3')
  }

}
