import { TestBed } from '@angular/core/testing';

import { JsondbService } from './jsondb.service';

describe('JsondbService', () => {
  let service: JsondbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsondbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
