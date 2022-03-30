import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TokenService } from './token.service';
import { Product } from '../products';

import {uri} from './uri'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  addProduct(data: Product){
    const token = this.tokenService.getToken()
    return this.http.post(uri + "/admin/add/", data, {
      headers: new HttpHeaders().set('x-access-token', token !== null ? token : ''),
      observe: 'response'
    })
  }
  doesNameExists(name: string): Observable<any>{
    const token = this.tokenService.getToken()
    return this.http.post(uri + "/admin/add/checkName", {name: name}, {
      headers: new HttpHeaders().set('x-access-token', token !== null ? token : '')
    })
  }

  get5Products(query: string): Observable<any>{
    const token = this.tokenService.getToken()
    return this.http.post(uri + "/admin/edit/get5Products", {name: query}, {
      headers: new HttpHeaders().set('x-access-token', token !== null ? token : '')
    })
  }

  getProdById(id: string): Observable<any>{
    const token = this.tokenService.getToken()
    return this.http.post(uri+'/admin/edit/', {id:id}, {
      headers: new HttpHeaders().set('x-access-token', token !== null ? token : '')
    })
  }

  updateProductById(id: string, data: any){
    const token = this.tokenService.getToken()
    return this.http.put(uri + '/admin/edit/', {id: id, data: data}, {
      headers: new HttpHeaders().set('x-access-token', token !== null ? token : '')
    })
  }
}
