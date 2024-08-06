import { TestBed } from '@angular/core/testing';

import { BusinessUserLoginLogoutService } from './business-user-login-logout.service';

describe('BusinessUserLoginLogoutService', () => {
  let service: BusinessUserLoginLogoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessUserLoginLogoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
