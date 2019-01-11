import { Component, OnInit } from '@angular/core';
import { IonicAngularThemeSwitchService } from 'ionic-angular-theme-switch';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  public selectedTheme: string;

  constructor(private themeSwitchService: IonicAngularThemeSwitchService) {
  }

  async ngOnInit() {
    this.selectedTheme = await this.themeSwitchService.getStoredThemeName();
  }

  public setDefaultTheme() {
    this.themeSwitchService.setTheme();
    this.selectedTheme = '';
  }

  public setVibrantTheme() {
    this.themeSwitchService.setTheme({
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
    }, 'vibrant');
    this.selectedTheme = 'vibrant';
  }

  public setDarkTheme() {
    this.themeSwitchService.setTheme({
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
      'ion-text-color': '#fff'
    }, 'dark');
    this.selectedTheme = 'dark';
  }

}
