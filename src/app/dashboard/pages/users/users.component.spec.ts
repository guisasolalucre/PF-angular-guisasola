import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UsersComponent } from "./users.component"
import { SharedModule } from "src/app/shared/shared.module";
import { UsersTableComponent } from "./users-table/users-table.component";
import { UserDialogComponent } from "./user-dialog/user-dialog.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from "rxjs";
import { User } from "./model/User";
import { provideMockStore } from "@ngrx/store/testing";
import { Role } from "./model/enums";
import { MatDialog } from "@angular/material/dialog";

describe('UsersComponent', () => {

   let usersComponent: UsersComponent;
   let fixture: ComponentFixture<UsersComponent>;

   let dialogSpy: jasmine.SpyObj<MatDialog>;

   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [
            UsersComponent,
            UsersTableComponent,
            UserDialogComponent
         ],
         imports: [
            SharedModule,
            HttpClientTestingModule,
         ],
         providers: [
            provideMockStore(),
            { provide: MatDialog, useValue: jasmine.createSpyObj('MatDialog', ['open']) },
         ]
      })

      fixture = TestBed.createComponent(UsersComponent)
      usersComponent = fixture.componentInstance;
      fixture.detectChanges();

      dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
   })



   it('should create users component', () => {
      expect(usersComponent).toBeTruthy();
   });


   it('should call service to get data', () => {
      const spyOnService = spyOn(
         (usersComponent as any).usersService,
         'getUsers'
      ).and.returnValue(of([
         {}, {}, {}, {}
      ]))
      usersComponent.ngOnInit();
      expect(spyOnService).toHaveBeenCalled();
   })
   

   it('should open dialog and call service if result is valid', () => {
      const DIALOG_MOCK = { id: '',username: 'mocku', password: 'mocku' }

      const dialogRefMock = jasmine.createSpyObj(
         'MatDialogRef',
         ['afterClosed', 'close']
      );

      dialogRefMock.afterClosed.and.returnValue(of(DIALOG_MOCK));

      dialogSpy.open.and.returnValue(dialogRefMock);

      usersComponent.onAddUser();

      expect(dialogSpy.open).toHaveBeenCalledWith(UserDialogComponent);

      dialogRefMock.close(DIALOG_MOCK);

      const spyOnService = spyOn(
         (usersComponent as any).usersService,
         'createUser'
      ).and.returnValue(of([
         {}, {}, {}, {}
      ]))

      usersComponent.onAddUser()

      expect(spyOnService).toHaveBeenCalledWith({
         id: jasmine.any(String),
         username: 'mocku',
         password: 'mocku',
         role: Role[1],
         token: jasmine.any(String),
      });
   });


})
