import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UsersComponent } from "./users.component"
import { UsersService } from "./users.service";
import { MockProvider } from "ng-mocks";
import { SharedModule } from "src/app/shared/shared.module";
import { UsersTableComponent } from "./users-table/users-table.component";
import { UserDialogComponent } from "./user-dialog/user-dialog.component";
import { of } from "rxjs";


fdescribe('UsersComponent', () => {

   let usersComponent: UsersComponent;

   beforeEach( () => {

      TestBed.configureTestingModule({
         declarations: [
            UsersComponent,
            UsersTableComponent,
            UserDialogComponent
         ],
         imports: [
            SharedModule,
         ],
         providers: [
            MockProvider(UsersService)
         ]
      })

      const fixture = TestBed.createComponent(UsersComponent)
      usersComponent = fixture.componentInstance;
      
   })


})
