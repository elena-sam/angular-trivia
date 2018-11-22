import { TestBed } from '@angular/core/testing';

import { TrivalService } from './trival.service';

describe('TrivalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrivalService = TestBed.get(TrivalService);
    expect(service).toBeTruthy();
  });
});
