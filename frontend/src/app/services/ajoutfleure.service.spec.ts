import { TestBed } from '@angular/core/testing';

import { AjoutfleureService } from './ajoutfleure.service';

describe('AjoutfleureService', () => {
  let service: AjoutfleureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutfleureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
