import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { User } from '../dashboard/pages/users/model/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { ILoginPayload } from './pages/login/model/ILoginPayload';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authUser$ = new BehaviorSubject<User | null>(null);

  public authUser$ = this._authUser$.asObservable();

  private baseURL : string = environment.baseUrl

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}


  login(payload: ILoginPayload): void {
    this.httpClient
      .get<User[]>(
        `${this.baseURL}/users?username=${payload.username}&password=${payload.password}`
      )
      .subscribe({
        next: (r) => {
          if (!r.length) {
            console.log('usuario invalido');
          } else {
            const authUser = r[0]
            this._authUser$.next(authUser);
            localStorage.setItem('token', authUser.token)
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
            this._authUser$.next(authUser);
            localStorage.setItem('token', authUser.token)
            return true;
          }
        })
      )
  }

  logout(){
    this._authUser$.next(null)
    localStorage.removeItem('token')
    this.router.navigate(['/auth/login'])
  }

}
