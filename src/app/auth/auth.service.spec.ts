import { TestBed } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { AuthService } from "./auth.service"
import { User } from "../dashboard/pages/users/model/User"
import { environment } from "src/environments/environment.local"
import { MockProvider } from "ng-mocks"
import { Router } from "@angular/router"
import { provideMockStore } from "@ngrx/store/testing"
import { AuthState } from "../store/auth/auth.reducer"
import { authUser } from "../store/auth/auth.selectors"
import { Store } from "@ngrx/store"


describe('AuthService', () => {

   let authService: AuthService
   let httpController: HttpTestingController
   let store: Store

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [
            HttpClientTestingModule,
            RouterTestingModule,
         ],
         providers: [
            MockProvider(Router),
            provideMockStore<AuthState>({
               initialState: {
                  authUser: null
               },
               selectors: [
                  {
                     selector: authUser,
                     value: null
                  }
               ]
            })
         ]
      })

      authService = TestBed.inject(AuthService)
      httpController = TestBed.inject(HttpTestingController)
      store = TestBed.inject(Store)
   })


   it('should create the service', () => {
      expect(authService).toBeTruthy();
   })


   it('should set authuser when login', () => {
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
      }).flush([USER_MOCK])

      authService.authUser$.subscribe({
         next: (authUser) => {
            expect(authUser).toBeTruthy()
            expect(authUser).toEqual(USER_MOCK)
         }
      })
   })
})