import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class ServiceRequestInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const current = new Date().getTime();
    const separator = req.url.indexOf('?') === -1 ? '?' : '&';
    if(this.loginService.getUserMobileNumber() != null){
      if(
        req.method === 'GET' ||
        req.method === 'POST' ||
        req.method === 'PUT' ||
        req.method === 'DELETE'
      ){
        req = req.clone({
          withCredentials: true,
          setHeaders: {
            clientToken: this.loginService.getClientToken(), 
          }, 
        });

        const changeUrl = req.url + separator + 'request.preventCache=' + current;
        const apiReq = req.clone({url: changeUrl});

        return next.handle(apiReq);
      }
    }
    return next.handle(req);
  }
}
 