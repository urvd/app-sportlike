import { TestBed } from '@angular/core/testing';

import { DatafootService } from './datafoot.service';

describe('DatafootService', () => {
  let service: DatafootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatafootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
