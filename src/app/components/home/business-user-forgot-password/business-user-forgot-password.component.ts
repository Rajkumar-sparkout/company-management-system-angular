import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BusinessUser } from 'src/app/models/businessUser';
import { Password } from 'src/app/models/password';
import { BusinessUserRegistrationService } from 'src/app/services/business-user-registration.service';
import { PasswordUpdatedConfirmationComponent } from '../../dialog/password-updated-confirmation/password-updated-confirmation.component';

@Component({
  selector: 'app-business-user-forgot-password',
  templateUrl: './business-user-forgot-password.component.html',
  styleUrls: ['./business-user-forgot-password.component.scss']
})
export class BusinessUserForgotPasswordComponent implements OnInit {

  constructor(
    private businessUserService: BusinessUserRegistrationService,
    private route: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  siteKey="6LfwoWQjAAAAAGNyxnNpea18zdnHR-zP4zH5Zm1v";
  public type!:'image' | 'audio';

  otpIcon =  '#A52A2A';
  createPasswordIcon = '#FDDA0D';
  confirmPasswordIcon = '#008080';

  firstForm = true;
  secondForm = false;
  response: any;
  message = false;
  color = 'black';


  mobileNumberForm = new FormGroup({
    mobileNumber: new FormControl('', [
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.required
    ]),
    captcha: new FormControl('', Validators.required)
  });

  mobileNumberMeaasge = false;
  mobileNumberAlreadyExistMeaasge?: string;
  mobile_number?: any;
  generateOTP(){
    if(this.mobileNumberForm.valid){
      this.businessUserService.generateOTPForExistUser(this.mobileNumberForm.value.mobileNumber).subscribe((resp)=> {
        this.response = resp;

        if(this.response.status == 200){
          this.firstForm = false;
          this.secondForm = true;
        }else{
          this.firstForm = true;
          this.secondForm = false;
          this.mobileNumberMeaasge = true;
          this.mobileNumberAlreadyExistMeaasge = this.response.message;
          this.color = 'red';
        }
      });
    }
  }

  passwordForm = new FormGroup({
    otp: new FormControl('', Validators.required),
    createPassword: new FormControl('', [
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
      Validators.required
    ]),
    confirmPassword: new FormControl('', Validators.required)
  });

  regenerateOtpButton = false;
  regenerateOTP(){
    this.businessUserService.generateOTPForExistUser(this.mobileNumberForm.value.mobileNumber).subscribe((resp)=> {
      this.response = resp;
      if(this.response.status == 200){
        this.regenerateOtpButton = false;
        this.passwordForm.controls.otp.reset();
      }
    })
  }

  otpExpiredEvent(){
    this.message = false;
    this.regenerateOtpButton = false;
  }
  
  responseMessage: string = ''
  messageColor = 'black';
  passwordCheck = true;
  checkConfirmPassword(){
    let password = this.passwordForm.value.createPassword as string;
    let confirmPassword = this.passwordForm.value.confirmPassword as string;

    if(password.length == confirmPassword.length &&
      password == confirmPassword){
         this.passwordCheck = true;
         this.color = 'black';
      }else{
        this.passwordCheck = false;
        this.color = 'red';
      }
  }

  gotoLoginButton = false;
  otpInvalidMessage = 'Your entered OTP has been invalid';
  otpExpiredMessage = "Your entered OTP has been expired, please generate the new OTP";
  password: Password = new Password();
  createPassword(){
    if(this.passwordForm.valid){
      if(this.passwordCheck){
        this.password.mobile_number= JSON.parse(
          JSON.stringify(this.mobileNumberForm.value.mobileNumber)
        )
        this.password.user_otp = JSON.parse(
          JSON.stringify(this.passwordForm.value.otp)
        );
        this.password.password = JSON.parse(
          JSON.stringify(this.passwordForm.value.confirmPassword)
        );

        this.businessUserService.createNewPassword(this.password).subscribe((resp)=> {
          this.response = resp;

          if(this.response.status == 200){
            this.passwordForm.reset();
            this.message = false;
            this.dialog.open(PasswordUpdatedConfirmationComponent, {
              data: {
                message: this.response.message
              }
            }).afterClosed();
          }else if(this.response.status == 400 && this.response.message == this.otpInvalidMessage){
            this.message = true;
            this.responseMessage = this.response.message;
            this.messageColor = 'red';
          }else if(this.response.status == 400 && this.response.message == this.otpExpiredMessage){
            this.regenerateOtpButton = true;
            this.message = true;
            this.responseMessage = this.response.message;
            this.messageColor = 'red';
          }
        });
      }else{
        this.message = true;
        this.responseMessage = "Confirm password didn't match. Please try again";
        this.messageColor = 'red';
      }
    }
  }

  gotoLogin(){
    this.route.navigate(['/businessUserLogin'])
  }

}
