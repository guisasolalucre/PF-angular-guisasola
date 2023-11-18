import { TestBed, fakeAsync, tick } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { LoginComponent } from "./login.component"
import { MockProvider } from "ng-mocks"
import { AuthService } from "../../auth.service"
import { SharedModule } from "src/app/shared/shared.module"

describe('LoginComponent', () => {

   let loginComponent: LoginComponent;

   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [LoginComponent],
         imports: [
            RouterTestingModule,
            SharedModule,
         ],
         providers: [
            MockProvider(AuthService),
         ]

      });
      
      const fixture = TestBed.createComponent(LoginComponent)
      loginComponent = fixture.componentInstance;
   })


   it('should create login component', () => {
      expect(loginComponent).toBeTruthy();
   });


   it('should mark all fields as touched if form is invalid', () => {
      loginComponent.loginForm.patchValue({
         username: 'gd',
         password: '34'
      });
      loginComponent.login();
      expect(loginComponent.usernameControl.touched).toBeTrue();
      expect(loginComponent.passwordControl.touched).toBeTrue();
   });

   
   it('should call login method from AuthService when form is valid', () => {
      loginComponent.loginForm.patchValue({
         username: 'qwert',
         password: '12345'
      });
      const spyOnAuthServiceLogin = spyOn(
         (loginComponent as any).authService, 
         'login'
      );
      loginComponent.login();
      expect(spyOnAuthServiceLogin).toHaveBeenCalled();
   });
})  