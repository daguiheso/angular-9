import { TestBed } from '@angular/core/testing';

import { HaloService } from './halo.service';

describe('HaloService', () => {
  let service: HaloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
