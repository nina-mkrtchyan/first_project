import { TestBed, inject } from '@angular/core/testing';

import { CafeService } from './cafe.service';

describe('CafeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafeService]
    });
  });

  it('should be created', inject([CafeService], (service: CafeService) => {
    expect(service).toBeTruthy();
  }));
});
