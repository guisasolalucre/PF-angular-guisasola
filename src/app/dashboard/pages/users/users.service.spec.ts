import { TestBed } from "@angular/core/testing";
import { UsersService } from "./users.service"
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('UsersService', () => {

   let usersService: UsersService

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [
            HttpClientTestingModule,
         ],
      })

      usersService = TestBed.inject(UsersService)
   })


   it('should create the service', () => {
      expect(usersService).toBeTruthy();
   })

})