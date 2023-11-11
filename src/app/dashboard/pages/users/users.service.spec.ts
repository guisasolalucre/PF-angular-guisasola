import { TestBed } from "@angular/core/testing";
import { UsersService } from "./users.service"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MockProvider } from "ng-mocks";
import { Router } from "@angular/router";

describe('UsersService', () => {

   let usersService: UsersService;
   let httpController: HttpTestingController;

   beforeEach( () => {
      TestBed.configureTestingModule({
         imports: [
            HttpClientTestingModule,
            RouterTestingModule,
         ],
         providers: [
            MockProvider(Router)
         ]
      })
   })

   it('should create the service', () => {
      expect(usersService).toBeTruthy();
   })
})