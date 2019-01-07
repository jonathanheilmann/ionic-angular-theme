import { TestBed } from '@angular/core/testing';

import { IonicAngularThemeSwitchService } from './ionic-angular-theme-switch.service';

describe('IonicAngularThemeSwitchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IonicAngularThemeSwitchService = TestBed.get(IonicAngularThemeSwitchService);
    expect(service).toBeTruthy();
  });
});
