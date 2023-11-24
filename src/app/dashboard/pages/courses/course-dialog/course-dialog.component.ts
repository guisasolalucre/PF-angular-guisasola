import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../model/Course';
import { CourseName, Teacher } from '../model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent {

  teachers: Teacher[] = []
  coursesNames: CourseName[] = []

  minStartDate: Date = new Date()
  minEndDate: Date = new Date()

  courseForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    private courseService: CourseService,

    @Inject(MAT_DIALOG_DATA)
    public data?: Course,

  ) {
    this.courseService.getCoursesNames().subscribe(
      (courses) => {
        courses.sort((a, b) => a.nameString.localeCompare(b.nameString));
        this.coursesNames = courses
      }
    )
    this.courseService.getTeachers().subscribe(
      (teachers) => {
        teachers.sort((a, b) => a.name.localeCompare(b.name));
        this.teachers = teachers
      }
    )

    this.courseForm = this.initializeForm()

    if (this.data) {
      this.courseForm.patchValue(this.data)
      this.disableStarted(this.data)
      this.endDateControl.enable()
    }

    this.startDateControl.valueChanges.subscribe(value => {
      if (value) {
        this.endDateControl.enable();
        let start = new Date(this.startDateControl.value)
        this.minEndDate = new Date(start.getTime() + (24 * 60 * 60 * 1000))
      } else {
        this.endDateControl.disable();
      }
    });
  }

  initializeForm(): FormGroup {
    let form: FormGroup =
      this.formBuilder.group({
        id: [''],
        name: ['',
          [Validators.required]],
        startDate: ['',
          [Validators.required]],
        endDate: [{
          value: '',
          disabled: true
        },
        [Validators.required]],
        teacher: ['',
          [Validators.required]],
      })

    return form
  }

  ngOnInit(): void {
    forkJoin([
      this.courseService.getCoursesNames(),
      this.courseService.getTeachers()
    ]).subscribe(
      ([courses, teachers]) => {
        courses.sort((a, b) => a.nameString.localeCompare(b.nameString));
        teachers.sort((a, b) => a.name.localeCompare(b.name));

        this.coursesNames = courses;
        this.teachers = teachers;

        this.initializeForm();

        if (this.data) {
          const selectedCourse = this.coursesNames.find(course => course.id === this.data?.name?.id);
          const selectedTeacher = this.teachers.find(teacher => teacher.id === this.data?.teacher?.id);

          if (selectedCourse) {
            this.nameControl.setValue(selectedCourse);
          }

          if (selectedTeacher) {
            this.teacherControl.setValue(selectedTeacher);
          }
        }
      }
    );
  }

  onSubmit(): void {
    this.courseForm.enable();
    const result = this.courseForm.getRawValue()
    this.dialogRef.close(result)
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

  get teacherControl() {
    return this.courseForm.controls['teacher'] as FormControl;
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

  get teacherControlError(): string {
    return this.teacherControl.hasError('required') ?
      'A teacher is required' : ''
  }


  disableStarted(data: Course): void {
    if (new Date(data.startDate) < this.minStartDate) {
      this.startDateControl.disable();
      this.nameControl.disable();
    }
  }

}
