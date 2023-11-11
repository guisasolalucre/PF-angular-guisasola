import { TestBed } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { AuthService } from "./auth.service"
import { User } from "../dashboard/pages/users/model/User"
import { environment } from "src/environments/environment.local"
import { MockProvider } from "ng-mocks"
import { Router } from "@angular/router"

describe('AuthService', () => {

   let authService: AuthService
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

      authService = TestBed.inject(AuthService)
      httpController = TestBed.inject(HttpTestingController)
   })


   it('should create the service', () => {
      expect(authService).toBeTruthy();
   })


   it('should set an authuser when login', () => {
      const USER_MOCK: User = {
         id: 'test1',
         username: 'testuser',
         password: 'testpass',
         role: 'ADMINISTRATOR',
         token: 'QWERTYUIOPASDFGHJKLZXCVBN',
      }

      authService.login({
         username: USER_MOCK.username,
         password: USER_MOCK.password
      })

      httpController.expectOne({
         method: 'GET',
         url: `${environment.baseUrl}/users?username=${USER_MOCK.username}&password=${USER_MOCK.password}`
      }).flush([
         USER_MOCK
      ])

      authService.authUser$.subscribe({
         next: (authUser) => { 
            expect(authUser).toBeTruthy()
            expect(authUser).toEqual(USER_MOCK)
         }
      })

      
   })
})