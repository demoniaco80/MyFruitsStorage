import { TestBed } from '@angular/core/testing';

import { FruitsCrudService } from './list-fruits.service';

describe('FruitsCrudService', () => {
  let service: FruitsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
