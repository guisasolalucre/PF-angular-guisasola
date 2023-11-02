import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

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
    this.authService.logout()
  }

}
