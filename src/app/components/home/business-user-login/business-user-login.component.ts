import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BusinessUserLogin } from 'src/app/models/businessUserLogin';
import { BusinessUserLoginLogoutService } from 'src/app/services/business-user-login-logout.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-business-user-login',
  templateUrl: './business-user-login.component.html',
  styleUrls: ['./business-user-login.component.scss']
})
export class BusinessUserLoginComponent implements OnInit {

  constructor(
    private businessUserLoginLogoutService: BusinessUserLoginLogoutService,
    private loginService: LoginService,
    private route: Router,
    private cookie: CookieService
  ) { }

  ngOnInit(): void {
  }
  

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  gotoSignup(){
    this.route.navigate(['/businessUserRegister'])
  }

  businessUserLogin: BusinessUserLogin = new BusinessUserLogin();
  response: any;
  message = false;
  responseMessage?:string;
  color = 'black';

  login(){
    if(this.loginForm.valid){
      this.businessUserLogin.user_name = this.loginForm.value.userName as string;
      this.businessUserLogin.password = this.loginForm.value.password as string;
      this.businessUserLoginLogoutService.getClientToken(this.loginForm.value.userName as string).subscribe((response)=> {
        this.businessUserLogin.clientToken  = response;

        this.businessUserLoginLogoutService.businessUserLogin(this.businessUserLogin).subscribe((response) => {
          this.response = response;
          Object.keys(response).forEach((datas)=> {
            const userDetails = response[datas];
            if (userDetails.mobile_number) {
              this.loginService.setUserRole(userDetails.role_id);
              this.loginService.setUserMobileNumber(userDetails.mobile_number);
              this.loginService.setClientToken(this.businessUserLogin.clientToken);
              window.location.href = window.location.href;
            } else if (this.response.status == 401) {
              this.message = true;
              this.responseMessage = 'Username or password is Incorrect';
              this.color = 'red';
            } else if (this.response.status == 403) {
              this.message = true;
              this.responseMessage = this.response.message;
              this.color = 'red';
            }
          });
        },
        (err)=> {
          if(err.status === 401){
            this.message = true;
            this.responseMessage = 'Username or password is Incorrect';
            this.color = 'red';
          }else{
            this.message = true;
            this.responseMessage = 'Internal server error please try again after some time';
            this.color = 'red';
          }
        });
      });
    }
  }
  
}


  // login(){
  //   if(this.loginForm.valid){
  //     this.businessUserLogin.user_name = this.loginForm.value.userName as string;
  //     this.businessUserLogin.password = this.loginForm.value.password as string;
  //     this.businessUserLoginLogoutService.getClientToken(this.loginForm.value.userName as string).subscribe((response)=> {
  //       this.businessUserLogin.clientToken  = response;

  //       this.businessUserLoginLogoutService.businessUserLogin(this.businessUserLogin).subscribe((response)=> {
  //         Object.keys(response).forEach((datas)=> {
  //           const userDetails = response[datas];
  
  //             this.loginService.setUserRole(userDetails.role_id);
  //             this.loginService.setUserMobileNumber(userDetails.mobile_number);
  //             this.loginService.setClientToken(this.businessUserLogin.clientToken);
  //             window.location.href = window.location.href;
  //         });
  //       },
  //       (err)=> {
  //         if(err.status === 401){
  //           this.message = true;
  //           this.responseMessage = 'Username or password is Incorrect';
  //           this.color = 'red';
  //         }else{
  //           this.message = true;
  //           this.responseMessage = 'Internal server error please try again after some time';
  //           this.color = 'red';
  //         }
  //       });
  //     });
  //   }
  // }