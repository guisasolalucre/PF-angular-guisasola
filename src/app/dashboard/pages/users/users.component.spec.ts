import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { Role } from './model/enums';
import { MatDialog } from '@angular/material/dialog';
import { UserActions } from './store/user.actions';
import { Store, StoreModule } from '@ngrx/store';
import { User } from './model/User';
import { State, userFeatureKey } from '../users/store/user.reducer';

describe('UsersComponent', () => {
   let usersComponent: UsersComponent;
   let fixture: ComponentFixture<UsersComponent>;
   let dialogSpy: jasmine.SpyObj<MatDialog>;
   let store: Store<State>;

   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [UsersComponent, UsersTableComponent, UserDialogComponent],
         imports: [
            SharedModule,
            HttpClientTestingModule,
            StoreModule.forRoot({}),
            StoreModule.forFeature(userFeatureKey, {}),
         ],
         providers: [
            provideMockStore({
               initialState: {
                  user: {
                     users: [],
                     isLoading: true,
                  },
               },
            }),
            {
               provide: MatDialog,
               useValue: jasmine.createSpyObj('MatDialog', ['open']),
            },
         ],
      });

      fixture = TestBed.createComponent(UsersComponent);
      usersComponent = fixture.componentInstance;
      fixture.detectChanges();
      store = TestBed.inject(Store);

      dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
   });

   it('should create users component', () => {
      expect(usersComponent).toBeTruthy();
   });

   it('should call service to get data', fakeAsync(() => {
      const spyOnLoadUsers = spyOn(store, 'dispatch').and.callThrough();
      usersComponent.ngOnInit();
      tick();
      expect(spyOnLoadUsers).toHaveBeenCalledWith(UserActions.loadUsers());
   }));

   it('should open dialog and call service if result is valid', fakeAsync(() => {
      const DIALOG_MOCK = { id: '', username: 'mocku', password: 'mocku' };

      const dialogRefMock = jasmine.createSpyObj('MatDialogRef', [
         'afterClosed',
         'close',
      ]);
      dialogRefMock.afterClosed.and.returnValue(of(DIALOG_MOCK));

      dialogSpy.open.and.returnValue(dialogRefMock);

      usersComponent.onAddUser();

      expect(dialogSpy.open).toHaveBeenCalledWith(UserDialogComponent);

      dialogRefMock.close(DIALOG_MOCK);

      const spyOnCreateUser = spyOn(store, 'dispatch')
         .and.callThrough();

      const expectedUser: User = {
         id: jasmine.any(String) as any,
         username: 'mocku',
         password: 'mocku',
         role: Role[1],
         token: jasmine.any(String) as any,
      };

      usersComponent.onAddUser();

      expect(spyOnCreateUser).toHaveBeenCalledWith(
         UserActions.createUser({ payload: expectedUser })
      );
   }));
});

