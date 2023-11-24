import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isAdmin: boolean = false

  showOptions: boolean = false

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
