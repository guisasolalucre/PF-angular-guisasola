import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../model/User';

@Component({
  selector: 'app-pass-dialog',
  templateUrl: './pass-dialog.component.html',
  styleUrls: ['./pass-dialog.component.scss']
})
export class PassDialogComponent {

    userForm: FormGroup;
  
    constructor(
      private formBuilder: FormBuilder,

      @Inject(MAT_DIALOG_DATA) 
      public data?: User,
    ) {
      this.userForm = this.formBuilder.group({
        id: [''],
        username: [''],
        role: [''],
        token: [''],
        usernameShown: [{
          value:'',
          disabled: true
        }],
        password: ['',
          [Validators.required,
          Validators.minLength(5)]],
      });
    
      if (this.data) {
        this.userForm.patchValue(this.data);
        this.userForm.patchValue({usernameShown: this.data.username})
      }
    }
  
    get idControl() {
      return this.userForm.controls['id'] as FormControl;
    }
  
    get usernameControl() {
      return this.userForm.controls['username'] as FormControl;
    }

    get roleControl() {
      return this.userForm.controls['role'] as FormControl;
    }

    get tokenControl() {
      return this.userForm.controls['token'] as FormControl;
    }

    get usernameShownControl() {
      return this.userForm.controls['usernameShown'] as FormControl;
    }
    
    get passwordControl() {
      return this.userForm.controls['password'] as FormControl;
    }
  
    get passwordControlErrors(): string {
      return this.passwordControl.hasError('required') ?
        'Password is required' :
        this.passwordControl.hasError('minlength') ?
        'Password must have at least 5 characters' :
        '';
    }
}
