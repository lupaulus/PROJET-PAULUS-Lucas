import { TestBed } from '@angular/core/testing';

import { ApiHttpInterceptor } from './apiHttpInterceptor.service';

describe('ApiHttpInterceptor', () => {
  let service: ApiHttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHttpInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
