import { TestBed, inject } from '@angular/core/testing';

import { MntApiService } from './mnt-api.service';

describe('MntApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MntApiService]
    });
  });

  it('should be created', inject([MntApiService], (service: MntApiService) => {
    expect(service).toBeTruthy();
  }));
});
