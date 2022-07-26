import { TestBed } from '@angular/core/testing';

import { ProcurartonService } from './procurarton.service';

describe('ProcurartonService', () => {
  let service: ProcurartonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcurartonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
