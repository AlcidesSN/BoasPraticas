import { TestBed } from '@angular/core/testing';

import { FichasService } from './fichas.service';

describe('FichasService', () => {
  let service: FichasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
