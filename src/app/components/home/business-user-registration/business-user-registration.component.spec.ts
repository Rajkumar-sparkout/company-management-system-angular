import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUserRegistrationComponent } from './business-user-registration.component';

describe('BusinessUserRegistrationComponent', () => {
  let component: BusinessUserRegistrationComponent;
  let fixture: ComponentFixture<BusinessUserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessUserRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessUserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
