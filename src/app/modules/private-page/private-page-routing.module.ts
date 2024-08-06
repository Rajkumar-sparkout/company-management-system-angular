import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth-guard/auth.guard';
import { DashboardComponent } from 'src/app/private-page/dashboard/dashboard.component';
import { LayoutComponent } from 'src/app/private-page/dashboard/layout/layout.component';
import { CustomerRegistrationComponent } from 'src/app/private-page/pages/customer/customer-registration/customer-registration.component';
import { TestingCardsComponent } from 'src/app/private-page/pages/testing-cards/testing-cards.component';
import { PrivatePageComponent } from 'src/app/private-page/private-page.component';

const privatePageRoutes: Routes = [
  {
    path: '',
    component: PrivatePageComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'dashboard', component: TestingCardsComponent },
      {
        path: 'customer-registration',
        component: CustomerRegistrationComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'smartbu2c/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(privatePageRoutes)],
  exports: [RouterModule],
})
export class PrivatePageRoutingModule {}
