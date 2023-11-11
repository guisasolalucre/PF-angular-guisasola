import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UsersComponent } from "./users.component"
import { SharedModule } from "src/app/shared/shared.module";
import { UsersTableComponent } from "./users-table/users-table.component";
import { UserDialogComponent } from "./user-dialog/user-dialog.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from "rxjs";

describe('UsersComponent', () => {

   let usersComponent: UsersComponent;
   let fixture: ComponentFixture<UsersComponent>;

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
      })

      fixture = TestBed.createComponent(UsersComponent)
      usersComponent = fixture.componentInstance;
      fixture.detectChanges();
   })



   it('should create users component', () => {
      expect(usersComponent).toBeTruthy();
   });



   it('should call service to get data', () => {
      const spyOnService = spyOn(
         (usersComponent as any).usersService,
         'getUsers'
      ).and.returnValue(of([
         {},{},{},{}
      ]))
      usersComponent.ngOnInit();
      expect(spyOnService).toHaveBeenCalled();
   })

})
