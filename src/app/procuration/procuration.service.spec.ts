import { TestBed } from '@angular/core/testing';

import { ProcurationService } from './procuration.service';

describe('ProcurationService', () => {
  let service: ProcurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
