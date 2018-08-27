import { TestBed, inject } from '@angular/core/testing';

import { SwatchbookService } from './swatchbook.service';

describe('SwatchbookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwatchbookService]
    });
  });

  it('should be created', inject([SwatchbookService], (service: SwatchbookService) => {
    expect(service).toBeTruthy();
  }));
});
