import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicAngularThemeSwitchToggleComponent } from './ionic-angular-theme-switch-toggle.component';

describe('IonicAngularThemeSwitchToggleComponent', () => {
  let component: IonicAngularThemeSwitchToggleComponent;
  let fixture: ComponentFixture<IonicAngularThemeSwitchToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicAngularThemeSwitchToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicAngularThemeSwitchToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
