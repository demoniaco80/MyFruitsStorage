import { TestBed } from '@angular/core/testing';

import { BikesCrudService } from './bikes-crud.service';

describe('BikesCrudService', () => {
  let service: BikesCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikesCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
