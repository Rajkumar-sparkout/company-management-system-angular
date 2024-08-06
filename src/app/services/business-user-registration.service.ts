import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessUser } from '../models/businessUser';
import { HttpClient } from '@angular/common/http';
import { Password } from '../models/password';

@Injectable({
  providedIn: 'root'
})
export class BusinessUserRegistrationService {

  constructor(private http: HttpClient) { }

  backendUrl = 'http://localhost:3000'; 

  public generatrOTP(cmsysUser: BusinessUser): Observable<any>{
    return this.http.post(this.backendUrl + '/generateOTPForBusinessUser', cmsysUser)
  }

  public createBusinessUser(cmsysUser: BusinessUser): Observable<any>{
    return this.http.post(this.backendUrl + '/createBusinessUser', cmsysUser);
  }

  public deleteOTP(mobileNumber: any): Observable<any>{
    return this.http.delete(this.backendUrl + '/deleteOTP/' + mobileNumber);
  }

  public generateOTPForExistUser(mobile_number: any): Observable<any>{
    return this.http.get(this.backendUrl + '/generateOTPForExistUser/' + mobile_number);
  }

  public createNewPassword(password: Password): Observable<any>{
    return this.http.post(this.backendUrl + '/createNewPassword', password);
  }
}
