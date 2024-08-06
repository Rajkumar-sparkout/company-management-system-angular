import { TestBed } from '@angular/core/testing';

import { ServiceRequestInterceptor } from './service-request.interceptor';

describe('ServiceRequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ServiceRequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ServiceRequestInterceptor = TestBed.inject(ServiceRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
