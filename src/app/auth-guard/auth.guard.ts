import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(private loginService: LoginService){}

  canActivate() {
    if(
      this.loginService.getUserRole() &&
      this.loginService.getUserMobileNumber() != null
    ){
      return true;
    }else{
      window.location.href = '';
      return false;
    }
  }
  canActivateChild() {
    return this.canActivate();
  }
  
}
