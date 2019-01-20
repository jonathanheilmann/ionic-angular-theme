import { Component, OnInit } from '@angular/core';
import { IonicAngularThemeSwitchService } from 'ionic-angular-theme-switch';
import { darkTheme, vibrantTheme } from '../../providers/themes.provider';

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
    this.themeSwitchService.setTheme(vibrantTheme, 'vibrant');
    this.selectedTheme = 'vibrant';
  }

  public setDarkTheme() {
    this.themeSwitchService.setTheme(darkTheme, 'dark');
    this.selectedTheme = 'dark';
  }

}
