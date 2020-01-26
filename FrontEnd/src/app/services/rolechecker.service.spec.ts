import { TestBed } from '@angular/core/testing';

import { RolecheckerService } from './rolechecker.service';

describe('RolecheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RolecheckerService = TestBed.get(RolecheckerService);
    expect(service).toBeTruthy();
  });
});
