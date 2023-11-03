import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.userForm = this.formBuilder.group({
      id: [''],
      username: ['',
        [Validators.required,
        Validators.minLength(5)]],
      password: ['',
        [Validators.required,
        Validators.minLength(5)]],
    })
  }

  get idControl() {
    return this.userForm.controls['id'] as FormControl;
  }

  get usernameControl() {
    return this.userForm.controls['username'] as FormControl;
  }
  
  get passwordControl() {
    return this.userForm.controls['password'] as FormControl;
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

}
