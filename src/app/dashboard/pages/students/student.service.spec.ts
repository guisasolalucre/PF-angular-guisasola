import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { StudentService } from "./student.service"
import { TestBed } from "@angular/core/testing"
import { environment } from "src/environments/environment.local"
import { Student } from "./model/Student"
import { MockProvider } from "ng-mocks"

describe('StudentService', () => {

   let studentService: StudentService
   let httpController: HttpTestingController

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [
            HttpClientTestingModule,
         ],
      })

      studentService = TestBed.inject(StudentService)
      httpController = TestBed.inject(HttpTestingController)
   })


   it('should create the service', () => {
      expect(studentService).toBeTruthy();
   })


   it('should get data from api', () => {
      let STUDENTS_MOCK: Student[] = [
         { "id": "2UeoA", "idnumber": 98765432, "active": false, "name": "Bobby", "surname": "Drake", "dob": new Date(1992, 1, 15), "email": "iceman@example.com" },
         { "id": "xzBi6", "idnumber": 12345678, "active": true, "name": "Scott", "surname": "Summers", "dob": new Date(1963, 8, 1), "email": "cyclops@example.com" },
      ]

      studentService.getStudents().subscribe(
         students => {
            expect(students).toBeTruthy()
            expect(students).toEqual(STUDENTS_MOCK)
         }
      )

      httpController.expectOne({
         method: 'GET',
         url: `${environment.baseUrl}/students`
      }).flush(STUDENTS_MOCK)

   })


   it('should post data to api', () => {
      let STUDENT_MOCK: Student = { id: "wUHl9", idnumber: 87654321, active: true, name: "Jean", surname: "Grey", "dob": new Date(1963,8,1), email: "phoenix@example.com"}
      
      let STUDENTS_MOCK: Student[] = [
         { id: "2UeoA", idnumber: 98765432, active: false, name: "Bobby", surname: "Drake", dob: new Date(1992, 1, 15), email: "iceman@example.com" },
         { id: "xzBi6", idnumber: 12345678, active: true, name: "Scott", surname: "Summers", dob: new Date(1963, 8, 1), email: "cyclops@example.com" },
         STUDENT_MOCK,
      ]

      studentService.createStudent(STUDENT_MOCK).subscribe(
         students => {
            expect(students).toBeTruthy()
            expect(students).toEqual(STUDENTS_MOCK);
         }
      )

      const req = httpController.expectOne({
         method: 'POST',
         url: `${environment.baseUrl}/students`,
      })
      
      req.flush(STUDENTS_MOCK)

      expect(req.request.body).toEqual(STUDENT_MOCK)     
   })


   it('should put data to api', () => {
      let STUDENT_MOCK: Student = { id: "2UeoA", idnumber: 87654321, active: true, name: "Jean", surname: "Grey", "dob": new Date(1963,8,1), email: "phoenix@example.com"}
      
      let STUDENTS_MOCK: Student[] = [
         { id: "2UeoA", idnumber: 98765432, active: false, name: "Bobby", surname: "Drake", dob: new Date(1992, 1, 15), email: "iceman@example.com" },
         { id: "xzBi6", idnumber: 12345678, active: true, name: "Scott", surname: "Summers", dob: new Date(1963, 8, 1), email: "cyclops@example.com" },
         STUDENT_MOCK,
      ]

      studentService.updateStudent(STUDENT_MOCK.id, STUDENT_MOCK).subscribe(
         students => {
            expect(students).toBeTruthy()
            expect(students).toEqual(STUDENTS_MOCK);
         }
      )

      const req = httpController.expectOne({
         method: 'PUT',
         url: `${environment.baseUrl}/students/${STUDENT_MOCK.id}`,
      })

      req.flush(STUDENTS_MOCK)

      expect(req.request.body).toEqual(STUDENT_MOCK)
      
   })

})