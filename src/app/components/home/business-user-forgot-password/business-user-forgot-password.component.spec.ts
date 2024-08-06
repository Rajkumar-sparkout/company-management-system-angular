import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUserForgotPasswordComponent } from './business-user-forgot-password.component';

describe('BusinessUserForgotPasswordComponent', () => {
  let component: BusinessUserForgotPasswordComponent;
  let fixture: ComponentFixture<BusinessUserForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessUserForgotPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessUserForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
