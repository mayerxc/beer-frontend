import { TestBed } from '@angular/core/testing';

import { UpdateBeerService } from './update-beer.service';

describe('UpdateBeerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateBeerService = TestBed.get(UpdateBeerService);
    expect(service).toBeTruthy();
  });
});
