import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/model';
import { ageValidator } from 'src/app/util/custom-validators';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss']
})
export class AddStudentDialogComponent {

  maxDate: Date = new Date()

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  addStudentForm = this.formBuilder.group({
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

  get idControl() {
    return this.addStudentForm.controls['id'];
  }

  get idControlIsInvalid() {
    return this.idControl.invalid && this.idControl.touched;
  }

  get nameControl() {
    return this.addStudentForm.controls['name'];
  }

  get nameControlIsInvalid() {
    return this.nameControl.invalid && this.nameControl.touched;
  }

  get surnameControl() {
    return this.addStudentForm.controls['surname'];
  }

  get surnameControlIsInvalid() {
    return this.surnameControl.invalid && this.surnameControl.touched;
  }

  get dobControl() {
    return this.addStudentForm.controls['dob'];
  }

  get dobControlIsInvalid() {
    return this.dobControl.invalid && this.dobControl.touched;
  }

  get emailControl() {
    return this.addStudentForm.controls['email'];
  }

  get emailControlIsInvalid() {
    return this.emailControl.invalid && this.emailControl.touched;
  }

  submit(){

    return this.addStudentForm.value

  }


}
