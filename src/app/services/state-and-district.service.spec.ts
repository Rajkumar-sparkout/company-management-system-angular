import { TestBed } from '@angular/core/testing';

import { StateAndDistrictService } from './state-and-district.service';

describe('StateAndDistrictService', () => {
  let service: StateAndDistrictService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateAndDistrictService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
