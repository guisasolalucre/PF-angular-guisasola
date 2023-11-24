import { TestBed } from "@angular/core/testing";
import { UsersService } from "./users.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { User } from "./model/User";
import { environment } from "src/environments/environment.local";
import { Store, StoreModule } from "@ngrx/store";
import { State, userFeatureKey } from "./store/user.reducer";

describe('UsersService', () => {
   let usersService: UsersService;
   let httpController: HttpTestingController;
   let store: Store<State>;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [
            HttpClientTestingModule,
            StoreModule.forRoot({}),
            StoreModule.forFeature(userFeatureKey, {})
         ],
      });

      usersService = TestBed.inject(UsersService);
      httpController = TestBed.inject(HttpTestingController);
      store = TestBed.inject(Store);
   });

   it('should create the service', () => {
      expect(usersService).toBeTruthy();
   });

   it('should get data from api', () => {
      const USERS_MOCK: User[] = [
         { id: "Bi6_2", username: "admin", password: "admin", role: "ADMINISTRATOR", token: "nPXR5cpDLWEf6uktA6x5UST3L" },
         { id: "Hl9d3", username: "assist", password: "assist", role: "ASSISTANT", token: "ywvmIKFblMTGINDuoyZgN_WQD" },
      ];

      usersService.getUsers().subscribe(users => {
         expect(users).toBeTruthy();
         expect(users).toEqual(USERS_MOCK);
      });

      const req = httpController.expectOne({
         method: 'GET',
         url: `${environment.baseUrl}/users`,
      });

      req.flush(USERS_MOCK);
   });

   it('should post data to api', () => {
      const USER_MOCK: User = { id: "Bi6_2", username: "mocku", password: "mocku", role: "ADMINISTRATOR", token: "mockumockumockumockumocku" };

      usersService.createUser(USER_MOCK).subscribe(users => {
         expect(users).toBeTruthy();
         expect(users).toEqual(USER_MOCK);
      });

      const req = httpController.expectOne({
         method: 'POST',
         url: `${environment.baseUrl}/users`,
      });

      req.flush(USER_MOCK);

      expect(req.request.body).toEqual(USER_MOCK);
   });

   it('should delete data from api', () => {
      const USER_MOCK: User = { id: "Bi6_2", username: "mocku", password: "mocku", role: "ADMINISTRATOR", token: "mockumockumockumockumocku" };
      const USERS_MOCK: User[] = [
         { id: "Bi6_2", username: "admin", password: "admin", role: "ADMINISTRATOR", token: "nPXR5cpDLWEf6uktA6x5UST3L" },
         { id: "Hl9d3", username: "assist", password: "assist", role: "ASSISTANT", token: "ywvmIKFblMTGINDuoyZgN_WQD" },
         USER_MOCK,
      ];

      usersService.deleteUser(USER_MOCK.id).subscribe();

      const req = httpController.expectOne({
         method: 'DELETE',
         url: `${environment.baseUrl}/users/${USER_MOCK.id}`,
      });

      req.flush(USERS_MOCK);

      expect(req.request.body).toBeNull();
   });
});
