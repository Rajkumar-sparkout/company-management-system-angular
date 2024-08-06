import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationConfirmationComponent } from './user-registration-confirmation.component';

describe('UserRegistrationConfirmationComponent', () => {
  let component: UserRegistrationConfirmationComponent;
  let fixture: ComponentFixture<UserRegistrationConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistrationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
