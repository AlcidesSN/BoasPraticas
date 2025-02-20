import { TestBed } from '@angular/core/testing';

import { RolldicesService } from './rolldices.service';

describe('RolldicesService', () => {
  let service: RolldicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolldicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
