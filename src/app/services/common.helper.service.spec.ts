import { TestBed, inject } from '@angular/core/testing';

import { Common.HelperService } from './common.helper.service';

describe('Common.HelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Common.HelperService]
    });
  });

  it('should be created', inject([Common.HelperService], (service: Common.HelperService) => {
    expect(service).toBeTruthy();
  }));
});
