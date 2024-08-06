import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Country } from 'src/app/models/country';
import { Industry } from 'src/app/models/industry';
import { Password } from 'src/app/models/password';
import { States } from 'src/app/models/states';
import { User } from 'src/app/models/user';
import { StateAndDistrictService } from 'src/app/services/state-and-district.service';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { UserRegistrationConfirmationComponent } from '../../dialog/user-registration-confirmation/user-registration-confirmation.component';
import { BusinessUserRegistrationService } from 'src/app/services/business-user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  constructor(
    private countryStateService: StateAndDistrictService,
    private userService: UserRegistrationService,
    private businessUSerService: BusinessUserRegistrationService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }
  siteKey="6LfwoWQjAAAAAGNyxnNpea18zdnHR-zP4zH5Zm1v";
  public type!:'image' | 'audio';

  otpIcon =  '#A52A2A';
  createPasswordIcon = '#FDDA0D';
  confirmPasswordIcon = '#008080';

  listOfCountries: Country[] = [];
  listOfStates: States[] = [];
  listOfIndustries: Industry[] = [];

  registrationForm = true;
  otpForm = false;

  getCountry(){
    this.countryStateService.getCountries().subscribe((resp)=> {
      this.listOfCountries = resp;
    })
  }

  signupForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobileNumber: new FormControl('', [
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.required
    ]),
    tag: new FormControl('', Validators.required),
    captcha: new FormControl('', Validators.required),
   });

   getStates(){
    this.countryStateService.getStateByCountry(this.signupForm.value.country).subscribe((resp)=> {
      this.listOfStates = resp;
    });
  }

  user: User = new User();
  response: any;
  mobileNumberExist = false;
  mobileNumberAlreadyExistMessage?:string;
  messageColor = 'black';
  generateOTP(){
    if(this.signupForm.valid){
      this.user.first_name = JSON.parse(
        JSON.stringify(this.signupForm.value.firstName)
      );
      this.user.last_name = JSON.parse(
        JSON.stringify(this.signupForm.value.lastName)
      );
      this.user.address = JSON.parse(
        JSON.stringify(this.signupForm.value.address)
      );
      this.user.city = JSON.parse(
        JSON.stringify(this.signupForm.value.city)
      );
      this.user.country = JSON.parse(
        JSON.stringify(this.signupForm.value.country)
      );
      this.user.state = JSON.parse(
        JSON.stringify(this.signupForm.value.state)
      );
      this.user.zipcode = JSON.parse(
        JSON.stringify(this.signupForm.value.zipCode)
      );
      this.user.email = JSON.parse(
        JSON.stringify(this.signupForm.value.email)
      );
      this.user.mobile_number = JSON.parse(
        JSON.stringify(this.signupForm.value.mobileNumber)
      );
      this.user.tag = JSON.parse(
        JSON.stringify(this.signupForm.value.tag)
      );

      this.userService.generatrOTP(this.user).subscribe((resp)=> {
        this.response = resp;
        if(this.response.status == 200){
          this.registrationForm = false;
          this.otpForm = true;
        }else{
          this.registrationForm = true;
          this.otpForm = false;
          this.mobileNumberExist = true;
          this.mobileNumberAlreadyExistMessage = this.response.message;
          this.messageColor = 'red';
        }
      })
    }
  }

  messageRemoveEvent(){
    this.mobileNumberExist = false;
  }

   passwordForm = new FormGroup({
    otp: new FormControl('', Validators.required),
    createPassword: new FormControl('', [
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
      Validators.required
    ]),
    confirmPassword: new FormControl('', Validators.required)
  });

  passwordCheck = true;
  color = '';
  checkConfirmPassword(){
    const password = this.passwordForm.value.createPassword as string;
    const confirmPassword = this.passwordForm.value.confirmPassword as string;
    if(password.length == confirmPassword.length && 
      password == confirmPassword){
        this.passwordCheck = true;
        this.color = 'black';
      }else{
        this.passwordCheck = false;
        this.color = 'red';
      }
  }

  regenerateOTPButton = false;
  message = false;
  
  otpExpiredMethod(){
    this.message = false;
    this.regenerateOTPButton = false;
  }

  regenerateOTP(){
    this.user.first_name = JSON.parse(
      JSON.stringify(this.signupForm.value.firstName)
    );
    this.user.last_name = JSON.parse(
      JSON.stringify(this.signupForm.value.lastName)
    );
    this.user.address = JSON.parse(
      JSON.stringify(this.signupForm.value.address)
    );
    this.user.city = JSON.parse(
      JSON.stringify(this.signupForm.value.city)
    );
    this.user.country = JSON.parse(
      JSON.stringify(this.signupForm.value.country)
    );
    this.user.state = JSON.parse(
      JSON.stringify(this.signupForm.value.state)
    );
    this.user.zipcode = JSON.parse(
      JSON.stringify(this.signupForm.value.zipCode)
    );
    this.user.email = JSON.parse(
      JSON.stringify(this.signupForm.value.email)
    );
    this.user.mobile_number = JSON.parse(
      JSON.stringify(this.signupForm.value.mobileNumber)
    );
    this.user.tag = JSON.parse(
      JSON.stringify(this.signupForm.value.tag)
    );

    this.userService.generatrOTP(this.user).subscribe((resp)=> {
      this.response = resp;
      if(this.response.status == 200){
        this.regenerateOTPButton = false;
        this.passwordForm.controls.otp.reset();
      }
    })
  }

  backToRegistration(){
    this.businessUSerService.deleteOTP(this.signupForm.value.mobileNumber).subscribe((resp)=> {
      this.response = resp;
      if(this.response.status == 200){
        this.otpForm = false;
        this.registrationForm = true;
        this.passwordForm.reset();
      }
    });
  }

  deleteOTP(){
    this.businessUSerService.deleteOTP(this.signupForm.value.mobileNumber).subscribe((resp)=> {
      this.response = resp;
    });
  }
  
  responseMessage?: string;
  otpInvalidMessage = 'OTP has been invalid';
  otpExpiredMessage = 'Your entered OTP has been expired, please generate new OTP';
  emailMobileNumberExistMessage = 'This email user is already exist';
  createUser(){
    if(this.passwordForm.valid){
      if(this.passwordCheck){
        this.user.password = JSON.parse(
          JSON.stringify(this.passwordForm.value.confirmPassword)
        );
        this.user.user_otp = JSON.parse(
          JSON.stringify(this.passwordForm.value.otp)
        );

        this.userService.createUser(this.user).subscribe((resp)=> {
          this.response = resp;
          if(this.response.status == 200){
            this.passwordForm.reset();
            this.message = false;
            this.dialog.open(UserRegistrationConfirmationComponent, {
              data: {
                message: this.response.message
              }
            }).afterClosed();
          }else if(this.response.status == 400 && this.response.message == this.otpInvalidMessage){
            this.message = true;
            this.responseMessage = this.response.message;
            this.messageColor = 'red';
          }else if(this.response.status == 400 && this.response.message == this.otpExpiredMessage){
            this.regenerateOTPButton = true;
            this.message = true;
            this.responseMessage = this.response.message;
            this.messageColor = 'red';
            this.deleteOTP();
          }else if(this.response.status == 400 && this.response.message == this.emailMobileNumberExistMessage){
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

}
