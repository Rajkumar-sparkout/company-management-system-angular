import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusinessUserLogin } from '../models/businessUserLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessUserLoginLogoutService {

  constructor(private http: HttpClient) { }

  backendUrl = 'http://localhost:3000'; 

  public getClientToken(userName: string):Observable<any>{
    return this.http.get(this.backendUrl + '/generateRandomString/' + userName, {responseType: 'text'});
  }

  public businessUserLogin(businessUserLogin: BusinessUserLogin):Observable<any>{
    return this.http.post(this.backendUrl + '/userLogin', businessUserLogin)
  }
  public logout():Observable<any>{
    return this.http.post(this.backendUrl + '/logout', '');
  }
  
}
