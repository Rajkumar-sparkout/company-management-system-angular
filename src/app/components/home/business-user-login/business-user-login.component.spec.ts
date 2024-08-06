import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUserLoginComponent } from './business-user-login.component';

describe('BusinessUserLoginComponent', () => {
  let component: BusinessUserLoginComponent;
  let fixture: ComponentFixture<BusinessUserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessUserLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
