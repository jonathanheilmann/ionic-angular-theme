import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchThemeSelectPage } from './switch-theme-select.page';

describe('SwitchThemeSelectPage', () => {
  let component: SwitchThemeSelectPage;
  let fixture: ComponentFixture<SwitchThemeSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchThemeSelectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchThemeSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
