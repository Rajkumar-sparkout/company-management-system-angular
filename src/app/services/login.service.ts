import { Inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    @Inject(LOCAL_STORAGE) private storageService: StorageService,
    private cookieService: CookieService
    ) { }

  setUserRole(data: string[]) {
    this.storageService.set('userRole', data);
  }

  getUserRole() {
    return this.storageService.get('userRole');
  }

  setUserMobileNumber(data: string) {
    this.storageService.set('userMobileNumber', data);
  }

  getUserMobileNumber() {
    return this.storageService.get('userMobileNumber');
  }

  setClientToken(clientToken: string){
    this.storageService.set('clientToken', clientToken)
  }

  getClientToken(){
    return this.storageService.get('clientToken');
  }

  clearUser(){
    this.storageService.remove('userRole');
    this.storageService.remove('userMobileNumber');
    this.storageService.remove('clientToken');
    return true;
  }
}
