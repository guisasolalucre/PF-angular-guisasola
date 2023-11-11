import { TestBed } from "@angular/core/testing";
import { UsersService } from "./users.service"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MockProvider } from "ng-mocks";
import { Router } from "@angular/router";
import { User } from "./model/User";
import { environment } from "src/environments/environment.local";

describe('UsersService', () => {

   let usersService: UsersService
   let httpController: HttpTestingController

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [
            HttpClientTestingModule,
            RouterTestingModule,
         ],
         providers: [
            MockProvider(Router)
         ]
      })

      usersService = TestBed.inject(UsersService)
      httpController = TestBed.inject(HttpTestingController)
   })


   it('should create the service', () => {
      expect(usersService).toBeTruthy();
   })


   // it('should set an authuser when login', () => {
   //    const USER_MOCK: User  = {
   //       id: 'test1',
   //       username: 'testuser',
   //       password: 'testpass',
   //       role: 'ADMINISTRATOR',
   //       token: 'QWERTYUIOPASDFGHJKLZXCVBN',
   //    }

   //    usersService.login({
   //       username: USER_MOCK.username,
   //       password: USER_MOCK.password
   //    })

   //    httpController.expectOne({
   //       method: 'GET',
   //       url: `${environment.baseUrl}/users?username=${USER_MOCK.username}&password=${USER_MOCK.password}`
   //    }).flush([
   //       USER_MOCK
   //    ])

   //    usersService.authUser$.subscribe({
   //       next: (authUser) => { 
   //          expect(authUser).toBeTruthy()
   //          expect(authUser).toEqual(USER_MOCK)
   //       }
   //    })

      
   // })
})