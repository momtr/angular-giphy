import { TestBed } from '@angular/core/testing';

import { GiphyService } from './giphy.service';

describe('GiphyServiceService', () => {
  let service: GiphyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
