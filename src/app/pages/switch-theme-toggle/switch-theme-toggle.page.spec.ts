import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchThemeTogglePage } from './switch-theme-toggle.page';

describe('SwitchThemeTogglePage', () => {
  let component: SwitchThemeTogglePage;
  let fixture: ComponentFixture<SwitchThemeTogglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchThemeTogglePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchThemeTogglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
