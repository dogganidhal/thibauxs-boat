import { TestBed } from '@angular/core/testing';

import { ExploreService } from './explore.service';

describe('ShopService', () => {
  let service: ExploreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
