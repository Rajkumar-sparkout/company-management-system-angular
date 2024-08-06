import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivatePageRoutingModule } from './private-page-routing.module';
import { DashboardComponent } from 'src/app/private-page/dashboard/dashboard.component';
import { LayoutComponent } from 'src/app/private-page/dashboard/layout/layout.component';
import { PrivatePageComponent } from 'src/app/private-page/private-page.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { TestingCardsComponent } from 'src/app/private-page/pages/testing-cards/testing-cards.component';
import { CustomerRegistrationComponent } from 'src/app/private-page/pages/customer/customer-registration/customer-registration.component';
import { CustomerComponent } from 'src/app/private-page/pages/customer/customer.component';


@NgModule({
  declarations: [
    PrivatePageComponent,
    DashboardComponent,
    LayoutComponent,
    CustomerComponent,
    CustomerRegistrationComponent,
    TestingCardsComponent
  ],
  imports: [
    CommonModule,
    PrivatePageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCaptchaModule,
    HttpClientModule,
  ]
})
export class PrivatePageModule { }
