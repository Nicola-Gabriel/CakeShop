import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../_models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl= 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts()
  {
    return this.http.get<IProduct[]>(this.baseUrl + 'products').pipe(
      map(response => {
       
        return response;
      })
    )
  }
}
