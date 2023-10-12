import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/model';
import { StudentService } from 'src/app/services/student.service';
import { ageValidator, emailExistsValidator, idExistsValidator } from 'src/app/shared/validators/custom-validators';


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

    public studentService: StudentService,
    
    @Inject(MAT_DIALOG_DATA) 
    public data?: Student,

    ) { 
      this.studentForm = this.formBuilder.group({
        id: ['',
          [Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(8),
          Validators.maxLength(8),
          idExistsValidator]],
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
          Validators.email,
          emailExistsValidator]],
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
            'ID is required' :
          this.idControl.hasError('pattern') ?
            'ID must contain numbers only' :  
          this.idControl.hasError('minlength') || this.idControl.hasError('maxlength') ?
            'ID must have 8 digits' :
            this.idControl.hasError('idexists') ?
            'Student already exists with this ID' : ''
  }

  get nameControlError(): string {
    return this.nameControl.hasError('required') ?
            'First name is required' :
          this.nameControl.hasError('pattern') ?
            'First name must contain only letters' : ''
  }

  get surnameControlError(): string {
    return this.surnameControl.hasError('required') ?
            'Last name is required' :
          this.surnameControl.hasError('pattern') ?
            'Last name must contain only letters' : ''
  }

  get dobControlError(): string {
    return this.dobControl.hasError('required') ?
            'Date of bith is required' : ''
  }

  get emailControlError(): string {
    return this.emailControl.hasError('required') ?
            'Email is required' :
          this.emailControl.hasError('pattern') ?
            'Invalid email' :
          this.emailControl.hasError('emailexists') ?
            'Student already exists with this email' : ''
  }



}
