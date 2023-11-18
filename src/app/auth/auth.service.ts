import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { User } from '../dashboard/pages/users/model/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { ILoginPayload } from './pages/login/model/ILoginPayload';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { AuthActions } from '../store/auth/auth.actions';
import { authUser } from '../store/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authUser$ = this.store.select(authUser);

  // private _authUser$ = new BehaviorSubject<User | null>(null);

  // public authUser$ = this._authUser$.asObservable();

  private baseURL : string = environment.baseUrl

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private store: Store,
  ) {}

  handleAuthUser(authUser: User): void{
    this.store.dispatch(AuthActions.setAuthUser({ data: authUser }))
    // this._authUser$.next(authUser);
    localStorage.setItem('token', authUser.token)
  }

  login(payload: ILoginPayload): void {
    this.httpClient
      .get<User[]>(
        `${this.baseURL}/users?username=${payload.username}&password=${payload.password}`
      )
      .subscribe({
        next: (r) => {
          if (!r.length) {
            Swal.fire({
              icon: 'error',
              text: 'Invalid username or password',
            })
          } else {
            const authUser = r[0]            
            this.handleAuthUser(authUser)
            this.router.navigate(['/dashboard/home'])
          }
        },
      })
  }

  verifyToken(): Observable<boolean>{
    return this.httpClient
      .get<User[]>(
        `${this.baseURL}/users?token=${localStorage.getItem('token')}`
      ).pipe(
        map( u => {
          if (!u.length) {
            return false;
          } else {
            const authUser = u[0]
            this.handleAuthUser(authUser)
            return true;
          }
        })
      )
  }

  logout(){
    this.store.dispatch(AuthActions.resetState())
    // this._authUser$.next(null)
    localStorage.removeItem('token')
    this.router.navigate(['/auth/login'])
  }

}
