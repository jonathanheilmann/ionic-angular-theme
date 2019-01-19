import { Component } from '@angular/core';
import { ToggleThemes } from 'ionic-angular-theme-switch';
import { vibrantTheme } from '../../providers/themes.provider';

@Component({
  selector: 'app-switch-theme-toggle',
  templateUrl: './switch-theme-toggle.page.html',
  styleUrls: ['./switch-theme-toggle.page.scss']
})
export class SwitchThemeTogglePage {

  public themes: ToggleThemes = {
    default: {},
    alternative: vibrantTheme
  };

}
