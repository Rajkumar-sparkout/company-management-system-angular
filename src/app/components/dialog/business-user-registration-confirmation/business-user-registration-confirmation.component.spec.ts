import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUserRegistrationConfirmationComponent } from './business-user-registration-confirmation.component';

describe('BusinessUserRegistrationConfirmationComponent', () => {
  let component: BusinessUserRegistrationConfirmationComponent;
  let fixture: ComponentFixture<BusinessUserRegistrationConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessUserRegistrationConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessUserRegistrationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
