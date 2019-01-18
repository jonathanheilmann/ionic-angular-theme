import { Component } from '@angular/core';
import { SelectThemes } from 'ionic-angular-theme-switch';

@Component({
  selector: 'app-switch-theme-select',
  templateUrl: './switch-theme-select.page.html',
  styleUrls: ['./switch-theme-select.page.scss'],
})
export class SwitchThemeSelectPage {

  public themes: SelectThemes = {
    Default: {},
    // https://github.com/ionic-team/ionic/blob/master/core/src/themes/test/css-variables/css/vibrant.css
    Vibrant: {
      primary: '#ff7f50',
      secondary: '#17deee',
      tertiary: '#ff4162',
      success: '#39ff14',
      warning: '#ffce00',
      danger: '#f04141',
      light: '#f4f5f8',
      medium: '#989aa2',
      dark: '#222428',

      'ion-background-color': '#778899',

      /* Component Colors */
      'ion-backdrop-color': '#556677',
      'ion-overlay-background-color': '#667788',

      'ion-border-color': '#5bff76',
      'ion-box-shadow-color': '#000',

      'ion-item-background': '#667788',
      'ion-item-border-color': '#5bff76'
    },
    // https://github.com/ionic-team/ionic/blob/master/core/src/themes/test/css-variables/css/dark.css
    Dark: {
      'ion-background-color': '#171717',
      'ion-text-color': '#fff',

      /* Component Colors */
      'ion-backdrop-color': '#2e2e2e',
      'ion-overlay-background-color': '#454545',

      'ion-border-color': '#5d5d5d',
      'ion-box-shadow-color': '#000',

      'ion-item-background': '#2e2e2e',
      'ion-item-background-activated': '#454545'
    },
    // https://github.com/ionic-team/ionic/blob/master/core/src/themes/test/css-variables/css/oceanic.css
    Oceanic: {
      primary: '#549ee7',
      secondary: '#5fb3b3',
      tertiary: '#fac863',
      success: '#90d089',
      warning: '#f99157',
      danger: '#ec5f67',
      light: '#d8dee9',
      medium: '#65737e',
      dark: '#1b2b34',

      'ion-background-color': '#1b2b34',
      'ion-text-color': '#fff',

      /* Component Colors */
      'ion-backdrop-color': '#1b2b34',
      'ion-overlay-background-color': '#142129',

      'ion-border-color': '#1b2b34',
      'ion-box-shadow-color': '#000',

      'ion-item-background': '#343d46',
      'ion-item-background-activated': '#232b34'
    }
  };
  private disabled = false;
  constructor() {
    setInterval(() => {
      // this.disabled = !this.disabled;
    }, 1000);
  }

}
