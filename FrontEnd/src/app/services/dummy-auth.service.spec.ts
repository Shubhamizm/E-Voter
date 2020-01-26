import { TestBed } from '@angular/core/testing';

import { DummyAuthService } from './dummy-auth.service';

describe('DummyAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DummyAuthService = TestBed.get(DummyAuthService);
    expect(service).toBeTruthy();
  });
});
