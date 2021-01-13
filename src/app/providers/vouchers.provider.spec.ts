import { TestBed } from '@angular/core/testing';

import { VouchersProvider } from './vouchers.provider';

describe('VouchersService', () => {
  let service: VouchersProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VouchersProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
