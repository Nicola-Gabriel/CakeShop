import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IUser } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) { }

  login(values: any) {
   return this.http.post<IUser>(this.baseUrl + 'account/login', values).pipe(
     map((user: IUser) => {
       if (user) {
         localStorage.setItem('token', user.token);
       }
     })
   );
  }

}
