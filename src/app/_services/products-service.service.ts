import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs';
import {uri} from './uri'

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient) { }

  /*
  getProducts(): Observable<Product[]> {
    return of(products)
  }
  */

  getProductFromApi(){
    return this.http.get(uri + '/products/get_products')
  }

  getProductById(id: string): Observable<any>{
    return this.http.post(uri + '/products/GetProductById', {
      id: id
    })
  }

  getMiniSearchResults(query: string): Observable<any>{
    return this.http.post(uri + '/products/GetProductForMiniSearch', {
      query: query
    })
  }
}

