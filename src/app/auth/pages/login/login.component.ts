import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, 
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['',
        [Validators.required,
        Validators.minLength(5)]],
      password: ['',
        [Validators.required,
        Validators.minLength(5)]],
    })
  }

  get usernameControl() {
    return this.loginForm.controls['username'] as FormControl;
  }
  
  get passwordControl() {
    return this.loginForm.controls['password'] as FormControl;
  }

  get usernameControlErrors(): string {
    return this.usernameControl.hasError('required') ?
      'Username is required' :
      this.usernameControl.hasError('minlength') ?
      'Username must have at least 5 characters' :
      '';
  }
  
  get passwordControlErrors(): string {
    return this.passwordControl.hasError('required') ?
      'Password is required' :
      this.passwordControl.hasError('minlength') ?
      'Password must have at least 5 characters' :
      '';
  }

  login(): void {
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    } else {
      this.authService.login(this.loginForm.value);
    }
  }

}
