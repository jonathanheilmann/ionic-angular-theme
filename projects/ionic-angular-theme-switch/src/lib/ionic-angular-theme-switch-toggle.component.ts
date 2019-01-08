import { Component, Input, OnInit } from '@angular/core';
import { IonicAngularThemeSwitchService, IonicColors } from './ionic-angular-theme-switch.service';

@Component({
  selector: 'theme-switch-toggle',
  template: `
    <ion-toggle (ionChange)="toggleTheme($event)"
                [checked]="isToggleChecked"
                [color]="color"
                [disabled]="disabled"
                [mode]="mode">
    </ion-toggle>
  `,
  styles: []
})
export class IonicAngularThemeSwitchToggleComponent implements OnInit {
  @Input() color: string;
  @Input() disabled = false;
  @Input() mode: 'ios' | 'md';
  @Input() themes: ToggleThemes = {
    default: {},
    alternative: {}
  };

  public isToggleChecked = false;
  private isInitialized = false;

  constructor(protected ionicAngularThemeSwitchService: IonicAngularThemeSwitchService) {
  }

  async ngOnInit() {
    const storedThemeName = await this.ionicAngularThemeSwitchService.getStoredThemeName();

    if (!storedThemeName || (storedThemeName !== 'default' && storedThemeName !== 'alternative')) {
      this.ionicAngularThemeSwitchService.setTheme(this.themes.default, 'default');
    } else {
      this.isToggleChecked = storedThemeName === 'alternative';
    }

    this.isInitialized = true;
  }

  public toggleTheme(event: CustomEvent) {
    if (this.isInitialized === false) {
      return;
    }

    this.isToggleChecked = event.detail.checked;

    this.ionicAngularThemeSwitchService.setTheme(
      this.isToggleChecked ? this.themes.alternative : this.themes.default,
      this.isToggleChecked ? 'alternative' : 'default'
    );
  }

}

export interface ToggleThemes {
  default: IonicColors;
  alternative: IonicColors;
}
