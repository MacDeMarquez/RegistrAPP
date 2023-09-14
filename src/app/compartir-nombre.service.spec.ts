import { TestBed } from '@angular/core/testing';

import { CompartirNombreService } from './compartir-nombre.service';

describe('CompartirNombreService', () => {
  let service: CompartirNombreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompartirNombreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
