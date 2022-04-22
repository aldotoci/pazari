import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {uri} from './uri'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any>{
    return this.http.post(uri + '/user/register', data)
  }

  login(data:any): Observable<any>{
    return this.http.post(uri + '/user/login', data)
  }

  existsUser(username: String): Observable<any>{
    return this.http.post(uri + '/user/register/existsUser', {username:username}, {observe: 'response'})
  }
  existsEmail(email: String): Observable<any>{
    return this.http.post(uri + '/user/register/existsEmail', {email:email}, {observe: 'response'})
  }
  existsPhone(phone: String): Observable<any>{
    return this.http.post(uri + '/user/register/existsPhone', {phone:phone}, {observe: 'response'})
  }

}
