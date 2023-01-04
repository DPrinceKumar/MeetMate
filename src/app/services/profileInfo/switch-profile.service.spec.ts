import { TestBed } from '@angular/core/testing';

import { SwitchProfileService } from './switch-profile.service';

describe('SwitchProfileService', () => {
  let service: SwitchProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
