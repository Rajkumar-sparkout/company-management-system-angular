import { TestBed } from '@angular/core/testing';

import { BusinessUserRegistrationService } from './business-user-registration.service';

describe('BusinessUserRegistrationService', () => {
  let service: BusinessUserRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessUserRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
