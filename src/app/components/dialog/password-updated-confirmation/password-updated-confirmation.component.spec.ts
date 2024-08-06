import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordUpdatedConfirmationComponent } from './password-updated-confirmation.component';

describe('PasswordUpdatedConfirmationComponent', () => {
  let component: PasswordUpdatedConfirmationComponent;
  let fixture: ComponentFixture<PasswordUpdatedConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordUpdatedConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordUpdatedConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
