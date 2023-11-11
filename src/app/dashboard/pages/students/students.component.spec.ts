import { TestBed } from "@angular/core/testing";
import { StudentFormDialogComponent } from "./student-form-dialog/student-form-dialog.component";
import { StudentsTableComponent } from "./students-table/students-table.component";
import { StudentsComponent } from "./students.component";
import { SharedModule } from "src/app/shared/shared.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from "rxjs";

describe('StudentsComponent', () => {

   let studentsComponent: StudentsComponent;

   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [
            StudentsComponent,
            StudentsTableComponent,
            StudentFormDialogComponent
         ],
         imports: [
            SharedModule,
            HttpClientTestingModule,
         ],
      })

      let fixture = TestBed.createComponent(StudentsComponent)
      studentsComponent = fixture.componentInstance;
   })



   it('should create students component', () => {
      expect(studentsComponent).toBeTruthy();
   });



   it('should call service to get data', () => {
      const spyOnService = spyOn(
         (studentsComponent as any).studentService,
         'getStudents'
      ).and.returnValue(of([
         {},{},{},{}
      ]))
      studentsComponent.ngOnInit();
      expect(spyOnService).toHaveBeenCalled();
   })


   it('should call student service to desactivate student', () => {
      const spyOnService = spyOn(
         (studentsComponent as any).studentService,
         'changeStatus'
      ).and.returnValue(of([
         {},{},{},{}
      ]))
      studentsComponent.onDesactivateStudent('aaaaa');
      expect(spyOnService).toHaveBeenCalled();
   })


   it('should call student service to send email', () => {
      const spyOnService = spyOn(
         (studentsComponent as any).studentService,
         'sendEmail'
      ).and.returnValue(of([
         {},{},{},{}
      ]))
      studentsComponent.onSendEmail('aaaaa');
      expect(spyOnService).toHaveBeenCalled();
   })

})