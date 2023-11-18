import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { usernameExistsValidator } from 'src/app/shared/validators/custom-validators';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
  ) {
    this.userForm = this.formBuilder.group({
      id: [''],
      username: ['',
        [Validators.required,
        Validators.minLength(5)],
        usernameExistsValidator(usersService)],
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
      this.usernameControl.hasError('usernameexists') ?
      'Username already exists' :
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
