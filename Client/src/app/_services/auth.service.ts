import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:8000/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email:username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string,c_password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      name:username,
      email,
      password,
      password_confirmation:c_password
    }, httpOptions);
  }
}
