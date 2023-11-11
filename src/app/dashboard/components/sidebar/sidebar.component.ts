import { Component, Input} from '@angular/core';
import { User } from '../../pages/users/model/User';
import { UsersService } from '../../pages/users/users.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isAdmin: boolean = false

  constructor(
    private authService: AuthService
  ){
    this.authService.authUser$.subscribe({
      next: (user) => { 
        this.isAdmin = user?.role === 'ADMINISTRATOR' ? true : false
      }
    })
  }

}
