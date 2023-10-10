import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/model';
import { ageValidator } from 'src/app/shared/validators/custom-validators';


@Component({
  selector: 'app-student-form-dialog',
  templateUrl: './student-form-dialog.component.html',
  styleUrls: ['./student-form-dialog.component.scss']
})
export class StudentFormDialogComponent {

  maxDate: Date = new Date(Date.now() - ((18*365.25)*(1000*3600*24)))

  student = new Student()

  studentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    
    @Inject(MAT_DIALOG_DATA) 
    public data?: Student,

    ) { 
      this.studentForm = this.formBuilder.group({
        id: ['',
          [Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(8),
          Validators.maxLength(8)]],
        name: ['',
          [Validators.required,
          Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+')]],
        surname: ['',
          [Validators.required,
          Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+')]],
        dob: ['',
          [Validators.required,
            ageValidator]],
        email: ['',
          [Validators.required,
          Validators.email]],
      })

      if (this.data) {
        this.studentForm.patchValue(this.data)
      }
    
  }

  



  //* GETTERS
  get idControl() {
    return this.studentForm.controls['id'] as FormControl;
  }

  get nameControl() {
    return this.studentForm.controls['name'] as FormControl;
  }
  
  get surnameControl() {
    return this.studentForm.controls['surname'] as FormControl;
  }
  
  get dobControl() {
    return this.studentForm.controls['dob'] as FormControl;
  }
  
  get emailControl() {
    return this.studentForm.controls['email']as FormControl;
  }


  //* ERRORS
  get idControlError(): string {
    return this.idControl.hasError('required') ?
            'El DNI es requerido' :
          this.idControl.hasError('pattern') ?
            'El DNI debe contener sólo números' :  
          this.idControl.hasError('minlength') || this.idControl.hasError('maxlength') ?
            'El DNI debe tener 8 cifras' : ''
  }

  get nameControlError() {
    return this.nameControl.hasError('required') ?
            'El nombre es requerido' :
          this.nameControl.hasError('pattern') ?
            'El nombre debe contener sólo letras' : ''
  }

  get surnameControlError() {
    return this.surnameControl.hasError('required') ?
            'El apellido es requerido' :
          this.surnameControl.hasError('pattern') ?
            'El apellido debe contener sólo letras' : ''
  }

  get dobControlError() {
    return this.dobControl.hasError('required') ?
            'La fecha de nacimiento es requerida' : ''
  }

  get emailControlError() {
    return this.surnameControl.hasError('required') ?
            'El email es requerido' :
          this.surnameControl.hasError('pattern') ?
            'El email ingresado no es válido' : ''
  }

}
