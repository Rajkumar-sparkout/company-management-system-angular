import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Password } from '../models/password';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  backendUrl = 'http://localhost:3000';

  public generatrOTP(user: User): Observable<any>{
    return this.http.post(this.backendUrl + '/generateOTPForUser', user)
  }

  public createUser(user: User): Observable<any>{
    return this.http.post(this.backendUrl + '/createUser', user);
  }
}
