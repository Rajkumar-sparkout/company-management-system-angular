import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BusinessUser } from 'src/app/models/businessUser';
import { District } from 'src/app/models/district';
import { State } from 'src/app/models/state';
import { BusinessUserRegistrationService } from 'src/app/services/business-user-registration.service';
import { StateAndDistrictService } from 'src/app/services/state-and-district.service';
import { BusinessUserRegistrationConfirmationComponent } from '../../dialog/business-user-registration-confirmation/business-user-registration-confirmation.component';
import { Industry } from 'src/app/models/industry';
import { States } from 'src/app/models/states';
import { Country } from 'src/app/models/country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-user-registration',
  templateUrl: './business-user-registration.component.html',
  styleUrls: ['./business-user-registration.component.scss']
})
export class BusinessUserRegistrationComponent implements OnInit {

  constructor(
    private stateDistrictService: StateAndDistrictService,
    private businessUserService: BusinessUserRegistrationService,
    private dialog: MatDialog,
    private route: Router
  ) { }

  siteKey="6LfwoWQjAAAAAGNyxnNpea18zdnHR-zP4zH5Zm1v";
  public type!:'image' | 'audio';

  listOfCountries: Country[] = [];
  listOfStates: States[] = [];
  listOfIndustries: Industry[] = [];


  response: any;

  otpIcon =  '#A52A2A';
  createPasswordIcon = '#FDDA0D';
  confirmPasswordIcon = '#008080';

  ngOnInit(): void {
    this.getCountry();
    this.getIndustries();
  }

  getCountry(){
    this.stateDistrictService.getCountries().subscribe((resp)=> {
      this.listOfCountries = resp;
    })
  }

  getStatesByCountry(){
    this.stateDistrictService.getStateByCountry(this.signupForm.value.country).subscribe((resp)=> {
      this.listOfStates = resp;
    });
  }

  getIndustries(){
    this.stateDistrictService.getIndustry().subscribe((resp)=> {
      this.listOfIndustries = resp;
    });
  }

   signupForm = new FormGroup({
    companyName: new FormControl('', Validators.required),
    owner: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl(''),
    zipCode: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    industry: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobileNumber: new FormControl('', [
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.required
    ]),
    tag: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required),
    companyDescription: new FormControl('', Validators.required),
    captcha: new FormControl('', Validators.required),
   });

  registrationForm = true;
  registrationFormSecond = false;
  otpForm = false;
  next(){
    this.registrationForm = false;
    this.registrationFormSecond = true;
    this.otpForm = false;
  }

  businessUser: BusinessUser = new BusinessUser();
  mobileNumberExist = false;
  mobileNumberExistMessage?: string;
  messageColor = 'black';
  generateOTP(){
    if(this.signupForm.valid){
      this.businessUser.company_name = JSON.parse(
        JSON.stringify(this.signupForm.value.companyName)
      );
      this.businessUser.owner = JSON.parse(
        JSON.stringify(this.signupForm.value.owner)
      );
      this.businessUser.address = JSON.parse(
        JSON.stringify(this.signupForm.value.address)
      );
      this.businessUser.city = JSON.parse(
        JSON.stringify(this.signupForm.value.city)
      );
      this.businessUser.state = JSON.parse(
        JSON.stringify(this.signupForm.value.state)
      );
      this.businessUser.zipcode = JSON.parse(
        JSON.stringify(this.signupForm.value.zipCode)
      );
      this.businessUser.country = JSON.parse(
        JSON.stringify(this.signupForm.value.country)
      );
      this.businessUser.email = JSON.parse(
        JSON.stringify(this.signupForm.value.email)
      );
      this.businessUser.mobile_number = JSON.parse(
        JSON.stringify(this.signupForm.value.mobileNumber)
      );
      this.businessUser.tag = JSON.parse(
        JSON.stringify(this.signupForm.value.tag)
      );
      this.businessUser.industry = JSON.parse(
        JSON.stringify(this.signupForm.value.industry)
      );
      this.businessUser.website = JSON.parse(
        JSON.stringify(this.signupForm.value.website)
      );
      this.businessUser.company_description = JSON.parse(
        JSON.stringify(this.signupForm.value.companyDescription)
      );

      this.businessUserService.generatrOTP(this.businessUser).subscribe((resp)=> {
        this.response = resp;
        if(this.response.status == 200){
          this.registrationForm = false;
          this.registrationFormSecond = false;
          this.otpForm = true;
        }else{
          this.registrationForm = false;
          this.registrationFormSecond = true;
          this.otpForm = false;
          this.mobileNumberExist = true;
          this.mobileNumberExistMessage = this.response.message;
          this.messageColor = 'red';
        }
      });
    }
  }

  messageRemoveEvent(){
    this.mobileNumberExist = false;
  }

  passwordForm = new FormGroup({
    otpNumber: new FormControl('', Validators.required),
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
    this.businessUser.company_name = JSON.parse(
      JSON.stringify(this.signupForm.value.companyName)
    );
    this.businessUser.owner = JSON.parse(
      JSON.stringify(this.signupForm.value.owner)
    );
    this.businessUser.address = JSON.parse(
      JSON.stringify(this.signupForm.value.address)
    );
    this.businessUser.city = JSON.parse(
      JSON.stringify(this.signupForm.value.city)
    );
    this.businessUser.state = JSON.parse(
      JSON.stringify(this.signupForm.value.state)
    );
    this.businessUser.country = JSON.parse(
      JSON.stringify(this.signupForm.value.country)
    );
    this.businessUser.zipcode = JSON.parse(
      JSON.stringify(this.signupForm.value.zipCode)
    );
    this.businessUser.email = JSON.parse(
      JSON.stringify(this.signupForm.value.email)
    );
    this.businessUser.mobile_number = JSON.parse(
      JSON.stringify(this.signupForm.value.mobileNumber)
    );
    this.businessUser.tag = JSON.parse(
      JSON.stringify(this.signupForm.value.tag)
    );
    this.businessUser.industry = JSON.parse(
      JSON.stringify(this.signupForm.value.industry)
    );
    this.businessUser.website = JSON.parse(
      JSON.stringify(this.signupForm.value.website)
    );
    this.businessUser.company_description = JSON.parse(
      JSON.stringify(this.signupForm.value.companyDescription)
    );

    this.businessUserService.generatrOTP(this.businessUser).subscribe((resp)=> {
      this.response = resp;
      if(this.response.status == 200){
        this.regenerateOTPButton = false;
        this.passwordForm.controls.otpNumber.reset();
      }
    });
  }

  mobileNumber?: any;
  backToRegistration(){
    this.mobileNumber = JSON.parse(JSON.stringify(this.signupForm.value.mobileNumber));
    this.businessUserService.deleteOTP(this.mobileNumber).subscribe((resp)=> {
      this.response = resp;
      if(this.response.status == 200){
        this.registrationForm = true;
        this.registrationFormSecond = false;
        this.otpForm = false;
        this.passwordForm.controls.otpNumber.reset();
        this.passwordForm.controls.createPassword.reset();
        this.passwordForm.controls.confirmPassword.reset();
      }
    });
  }

  deleteOTP(){
    this.businessUserService.deleteOTP(this.signupForm.value.mobileNumber).subscribe((resp)=> {
      this.response = resp;
    });
  }

  responseMessage: string = '';
  otpInvalidMessage = 'OTP has been invalid';
  otpExpiredMessage = 'Your entered OTP has been expired, please generate new OTP';
  emailMobileNumberExistMessage = 'This email user is already exist';
  createCmsysUser(){
    if(this.passwordForm.valid){
      if(this.passwordCheck){
        this.businessUser.password = JSON.parse(
          JSON.stringify(this.passwordForm.value.confirmPassword)
        );
        this.businessUser.user_otp = JSON.parse(
          JSON.stringify(this.passwordForm.value.otpNumber)
        );

        this.businessUserService.createBusinessUser(this.businessUser).subscribe((resp)=> {
          this.response = resp;
          if(this.response.status == 200){
            this.passwordForm.reset();
            this.message = false;
            this.dialog.open(BusinessUserRegistrationConfirmationComponent,{
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
