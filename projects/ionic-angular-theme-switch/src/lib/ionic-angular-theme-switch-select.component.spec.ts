import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicAngularThemeSwitchSelectComponent } from './ionic-angular-theme-switch-select.component';

describe('IonicAngularThemeSwitchSelectComponent', () => {
  let component: IonicAngularThemeSwitchSelectComponent;
  let fixture: ComponentFixture<IonicAngularThemeSwitchSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicAngularThemeSwitchSelectComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicAngularThemeSwitchSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
