import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.local';
import { User } from './model/User';
import { Observable, map, switchMap } from 'rxjs';
import { Role } from './model/enums';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseURL: string = environment.baseUrl + '/users';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseURL)
  }

  getById(id: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}?id=${id}`)
  }

  createUser(user: User): Observable<User[]> {
    return this.httpClient.post<User>(`${this.baseURL}`, user)
      .pipe(switchMap(() => this.getUsers()));
  }

  deleteUser(id: string): Observable<User[]> {
    return this.httpClient.delete(`${this.baseURL}/${id}`)
      .pipe(switchMap(() => this.getUsers()));
  }

  changeRole(id: string): Observable<User[]> {
    return this.getById(id).pipe(
      switchMap(users => {
        let newRole = '';
        let user = users[0];

        user.role === Role[0] ?
        newRole = Role[1] :
        user.role === Role[1] ?
        newRole = Role[0] : '';

        let changedUser = { ...user, role: newRole };

        return this.httpClient.put<User>(`${this.baseURL}/${id}`, changedUser)
        .pipe(switchMap(() => this.getUsers()));
      })
    );
  }

  changePassword(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseURL}/${id}`, user);
  }

  filterAdmin(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}?role=ADMINISTRATOR`)
  }

  usernameExists(id: string, username: string): Observable<boolean> {
    return this.httpClient.get<User[]>(`${this.baseURL}`).pipe(
      map(users => {
        let filtered = users.filter(u => u.id !== id);
        return filtered.some(u => u.username === username);
      })
    );
  }
}
