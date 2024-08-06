import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/home/banner/banner.component';
import { BusinessUserForgotPasswordComponent } from './components/home/business-user-forgot-password/business-user-forgot-password.component';
import { BusinessUserLoginComponent } from './components/home/business-user-login/business-user-login.component';
import { BusinessUserRegistrationComponent } from './components/home/business-user-registration/business-user-registration.component';
import { UserRegistrationComponent } from './components/home/user-registration/user-registration.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { BannerRightComponent } from './components/home/banner-right/banner-right.component';
import { NewPasswordCreateComponent } from './components/home/new-password-create/new-password-create.component';
import { AuthGuard } from './auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BannerComponent,
    children: [
      { path: '', component: BannerRightComponent, pathMatch: 'full' },
      {
        path: 'businessUserRegister',
        component: BusinessUserRegistrationComponent,
        pathMatch: 'full',
      },
      {
        path: 'userRegister',
        component: UserRegistrationComponent,
        pathMatch: 'full',
      },
      { path: 'businessUserLogin', component: BusinessUserLoginComponent },
      {
        path: 'businessUserforgotPassword',
        component: BusinessUserForgotPasswordComponent,
        pathMatch: 'full',
      },
      {
        path: 'createNewPassword',
        component: NewPasswordCreateComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'home',
    component: BannerComponent,
    children: [
      { path: '', component: BannerRightComponent, pathMatch: 'full' },
    ],
  },
  { path: 'aboutUs', component: AboutUsComponent, pathMatch: 'full' },
  {
    path: 'smartbu2c',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/private-page/private-page.module').then(
        (m) => m.PrivatePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
