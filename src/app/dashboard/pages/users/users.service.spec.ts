import { TestBed } from "@angular/core/testing";
import { UsersService } from "./users.service"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { User } from "./model/User";
import { environment } from "src/environments/environment.local";

describe('UsersService', () => {

   let usersService: UsersService
   let httpController: HttpTestingController

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [
            HttpClientTestingModule,
         ],
      })

      usersService = TestBed.inject(UsersService)
      httpController = TestBed.inject(HttpTestingController)
   })


   it('should create the service', () => {
      expect(usersService).toBeTruthy();
   })

   it('should get data from api', () => {
      let USERS_MOCK: User[] = [
         { id: "Bi6_2", username: "admin", password: "admin", role: "ADMINISTRATOR", token: "nPXR5cpDLWEf6uktA6x5UST3L" },
         { id: "Hl9d3", username: "assist", password: "assist", role: "ASSISTANT", token: "ywvmIKFblMTGINDuoyZgN_WQD"}
      ]

      usersService.getUsers().subscribe(
         users => {
            expect(users).toBeTruthy()
            expect(users).toEqual(USERS_MOCK)
         }
      )

      httpController.expectOne({
         method: 'GET',
         url: `${environment.baseUrl}/users`
      }).flush(USERS_MOCK)

   })


   it('should post data to api', () => {
      let USER_MOCK: User = { id: "Bi6_2", username: "mocku", password: "mocku", role: "ADMINISTRATOR", token: "mockumockumockumockumocku" }
      
      let USERS_MOCK: User[] = [
         { id: "Bi6_2", username: "admin", password: "admin", role: "ADMINISTRATOR", token: "nPXR5cpDLWEf6uktA6x5UST3L" },
         { id: "Hl9d3", username: "assist", password: "assist", role: "ASSISTANT", token: "ywvmIKFblMTGINDuoyZgN_WQD" },
         USER_MOCK,
      ]

      usersService.createUser(USER_MOCK).subscribe(
         users => {
            expect(users).toBeTruthy()
            expect(users).toEqual(USERS_MOCK);
         }
      )

      const req = httpController.expectOne({
         method: 'POST',
         url: `${environment.baseUrl}/users`,
      })
      
      req.flush(USERS_MOCK)

      expect(req.request.body).toEqual(USER_MOCK)     
   })


   it('should delete data from api', () => {
      let USER_MOCK: User = { id: "Bi6_2", username: "mocku", password: "mocku", role: "ADMINISTRATOR", token: "mockumockumockumockumocku" }
      
      let USERS_MOCK: User[] = [
         { id: "Bi6_2", username: "admin", password: "admin", role: "ADMINISTRATOR", token: "nPXR5cpDLWEf6uktA6x5UST3L" },
         { id: "Hl9d3", username: "assist", password: "assist", role: "ASSISTANT", token: "ywvmIKFblMTGINDuoyZgN_WQD" },
         USER_MOCK,
      ]

      usersService.deleteUser(USER_MOCK.id).subscribe(
         users => {
            expect(users).toBeTruthy()
            expect(users).toEqual(USERS_MOCK);
         }
      )

      const req = httpController.expectOne({
         method: 'DELETE',
         url: `${environment.baseUrl}/users/${USER_MOCK.id}`,
      })

      req.flush(USERS_MOCK)

      expect(req.request.body).toBeNull()
      
   })

})