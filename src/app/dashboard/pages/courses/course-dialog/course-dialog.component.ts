import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/model';
import { CourseService } from '../course.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent {

  minDate: Date = new Date()

  course = new Course()

  courseForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,

    public courseService: CourseService,
    
    @Inject(MAT_DIALOG_DATA) 
    public data?: Course,

    ) { 
      console.log(this.minDate);
      
      this.courseForm = this.formBuilder.group({
        id: [''],
        name: ['',
          [Validators.required,
          Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+')]],
        startDate: ['',
          [Validators.required]],
        endDate: ['',
          [Validators.required]],
      })

      if (this.data) {
        this.courseForm.patchValue(this.data)
      } 
  }


  //* GETTERS
  get idControl() {
    return this.courseForm.controls['id'] as FormControl;
  }

  get nameControl() {
    return this.courseForm.controls['name'] as FormControl;
  }

  get startDateControl() {
    return this.courseForm.controls['startDate'] as FormControl;
  }
  
  get endDateControl() {
    return this.courseForm.controls['endDate'] as FormControl;
  }


  //* ERRORS
  get nameControlError(): string {
    return this.nameControl.hasError('required') ?
            'Name is required' :
          this.nameControl.hasError('pattern') ?
            'Name must contain only letters' : ''
  }

  get startDateControlError(): string {
    return this.startDateControl.hasError('required') ?
            'Start date is required' : ''
  }

  get endDateControlError(): string {
    return this.endDateControl.hasError('required') ?
            'End date is required' : ''
  }

}
