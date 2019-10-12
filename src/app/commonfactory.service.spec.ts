import { TestBed } from '@angular/core/testing';

import { CommonfactoryService } from './commonfactory.service';

describe('CommonfactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonfactoryService = TestBed.get(CommonfactoryService);
    expect(service).toBeTruthy();
  });
});
