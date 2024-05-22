// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserDetails } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<{ data: User[], total: number }> {
    return this.http.get<{ data: User[], total: number }>(`${this.baseUrl}/users?page=${page}`);
  }

  getUser(id: number): Observable<UserDetails> {
    return this.http.get<UserDetails>(`${this.baseUrl}/users/${id}`);
  }
}
