import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TokenService } from './token.service';

const API_URI = "http://localhost:3000/admin/"

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  loginAsAdmin(username: string, password: string): Observable<any>{
    return this.http.post(API_URI + 'login/', {
      password: password,
      username: username,
    })
  }

  isAdmin(): Observable<any>{
    const token = this.tokenService.getToken()
    let response = this.http.get(API_URI, {
      'headers': new HttpHeaders().set('x-access-token', token !== null ? token : ''), 
      observe: 'response'
    })
    return response
  }
}
