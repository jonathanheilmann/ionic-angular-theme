import { Component } from '@angular/core';
import { SelectTheme } from 'ionic-angular-theme-switch';
import { darkTheme, defaultTheme, oceanicTheme, vibrantTheme } from '../../providers/themes.provider';

@Component({
  selector: 'app-switch-theme-select',
  templateUrl: './switch-theme-select.page.html',
  styleUrls: [ './switch-theme-select.page.scss' ]
})
export class SwitchThemeSelectPage {

  public themes: SelectTheme[] = [
    {
      key: 'default',
      theme: defaultTheme
    },
    {
      key: 'vibrant',
      label: 'Vibrant',
      theme: vibrantTheme
    },
    {
      key: 'dark',
      label: 'Dark',
      theme: darkTheme
    },
    {
      key: 'oceanic',
      label: 'Oceanic',
      theme: oceanicTheme
    }
    ];

}
