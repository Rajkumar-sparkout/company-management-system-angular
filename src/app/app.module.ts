import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { BodyCardComponent } from './components/home/body-card/body-card.component';
import { BusinessUserLoginComponent } from './components/home/business-user-login/business-user-login.component';
import { BusinessUserRegistrationComponent } from './components/home/business-user-registration/business-user-registration.component';
import { BusinessUserRegistrationConfirmationComponent } from './components/dialog/business-user-registration-confirmation/business-user-registration-confirmation.component';
import { BusinessUserForgotPasswordComponent } from './components/home/business-user-forgot-password/business-user-forgot-password.component';
import { UserRegistrationComponent } from './components/home/user-registration/user-registration.component';
import { UserRegistrationConfirmationComponent } from './components/dialog/user-registration-confirmation/user-registration-confirmation.component';
import { HomeComponent } from './components/home/home/home.component';
import { PublicPageComponent } from './components/home/public-page/public-page.component';
import { PrivatePageComponent } from './private-page/private-page.component';
import { DashboardComponent } from './private-page/dashboard/dashboard.component';
import { LayoutComponent } from './private-page/dashboard/layout/layout.component';
import { SocialMediaComponent } from './components/home/social-media/social-media.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { AboutUsTwoComponent } from './components/home/about-us-two/about-us-two.component';
import { AboutUsThreeComponent } from './components/home/about-us-three/about-us-three.component';
import { BannerCardComponent } from './components/home/banner-card/banner-card.component';
import { BannerRightComponent } from './components/home/banner-right/banner-right.component';
import { PasswordUpdatedConfirmationComponent } from './components/dialog/password-updated-confirmation/password-updated-confirmation.component';
import { PasswordExpiredComponent } from './components/dialog/password-expired/password-expired.component';
import { NewPasswordCreateComponent } from './components/home/new-password-create/new-password-create.component';
import { CookieService } from 'ngx-cookie-service';
import { ServiceRequestInterceptor } from './interceptor/service-request.interceptor';
import { PrivatePageModule } from './modules/private-page/private-page.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    BodyCardComponent,
    BusinessUserLoginComponent,
    BusinessUserRegistrationComponent,
    BusinessUserRegistrationConfirmationComponent,
    BusinessUserForgotPasswordComponent,
    UserRegistrationComponent,
    UserRegistrationConfirmationComponent,
    HomeComponent,
    PublicPageComponent,
    SocialMediaComponent,
    AboutUsComponent,
    AboutUsTwoComponent,
    AboutUsThreeComponent,
    BannerCardComponent,
    BannerRightComponent,
    PasswordUpdatedConfirmationComponent,
    PasswordExpiredComponent,
    NewPasswordCreateComponent,
  ],
  entryComponents: [
    BusinessUserRegistrationConfirmationComponent,
    UserRegistrationConfirmationComponent,
    PasswordUpdatedConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    HttpClientModule,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
