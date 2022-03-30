import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token: any){
    window.sessionStorage.setItem('token', token)
  }
  removeToken(){
    window.sessionStorage.clear()
  }
  getToken(){
    return window.sessionStorage.getItem('token')
  }
}
