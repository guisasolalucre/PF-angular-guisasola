import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-name-dialog',
  templateUrl: './add-name-dialog.component.html'
})
export class AddNameDialogComponent {

  nameForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    ) { 
      this.nameForm = this.formBuilder.group({
        name: ['', [Validators.required]],
      });
  }

  get nameControl() {
    return this.nameForm.controls['name'] as FormControl;
  }

  get nameControlError(): string {
    return this.nameControl.hasError('required') ?
            'Name is required' :
          this.nameControl.hasError('pattern') ?
            'Name must contain only letters' : ''
  }

}
