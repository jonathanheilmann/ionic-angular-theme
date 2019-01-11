import { Component } from '@angular/core';
import { ToggleThemes } from 'ionic-angular-theme-switch';

@Component({
  selector: 'app-switch-theme-toggle',
  templateUrl: './switch-theme-toggle.page.html',
  styleUrls: ['./switch-theme-toggle.page.scss']
})
export class SwitchThemeTogglePage {

  // see https://github.com/ionic-team/ionic/blob/master/core/src/themes/test/css-variables/css/vibrant.css
  public themes: ToggleThemes = {
    default: {},
    alternative: {
      primary: '#ff7f50',
      secondary: '#17deee',
      tertiary: '#ff4162',
      success: '#39ff14',
      warning: '#ffce00',
      danger: '#f04141',
      light: '#f4f5f8',
      medium: '#989aa2',
      dark: '#222428',

      'ion-background-color': '#778899'
    }
  };

}
