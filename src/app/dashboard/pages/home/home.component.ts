import { Component} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from '../users/model/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  authUser: User | null = null

  constructor(
    private authService: AuthService,
  ){
    this.authService.authUser$.subscribe((user: User | null) => {
      this.authUser = user;
    });
    console.log(this.authUser);
    
  }

}
