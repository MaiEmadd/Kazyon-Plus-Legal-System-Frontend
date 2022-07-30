import { TestBed } from '@angular/core/testing';

import { Procurartion1Service } from './procurartion1.service';

describe('Procurartion1Service', () => {
  let service: Procurartion1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procurartion1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
