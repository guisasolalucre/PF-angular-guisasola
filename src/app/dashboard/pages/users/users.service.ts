import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.local';
import { User } from './model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseURL : string = environment.baseUrl+'/users';

  public users: User[] = []

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseURL)
  }

  getById(id: string): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}?id=${id}`)
  }

  changeRole(id: string): void{
    this.getById(id).subscribe({
      next: (users) => {
        let newRole = ''
        let user: User
        user = users[0]

        user.role === 'ADMINISTRATOR' ?
        newRole = 'ASSISTANT' :
        user.role === 'ASSISTANT' ?
        newRole = 'ADMINISTRATOR': '';

        let changedUser = { ...user, role : newRole}

        this.httpClient.put<User[]>(`${this.baseURL}/${id}`,changedUser).subscribe()
      }
    })
  }
}
