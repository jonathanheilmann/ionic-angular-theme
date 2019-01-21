import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';

import { MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicAngularThemeSwitchService } from 'ionic-angular-theme-switch';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  public pages = [
    {
      title: 'Introduction',
      url: '/introduction'
    }
  ];
  public servicePages = [
    {
      title: 'Service demo',
      url: '/service'
    }
  ];
  public componentPages = [
    {
      title: 'switch-theme-select demo',
      url: '/switch-theme-select'
    },
    {
      title: 'switch-theme-toggle demo',
      url: '/switch-theme-toggle'
    }
  ];
  public selectedPath = null;

  constructor(
    private ionicAngularThemeSwitchService: IonicAngularThemeSwitchService,
    private menuCtrl: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage
  ) {
    this.initializeApp();

    this.router.events.subscribe(async (event: RouterEvent) => {
      if (this.selectedPath === null && event instanceof NavigationStart) {
        const selectedPath = await this.storage.get('selectedPath');
        if (selectedPath !== event.url) {
          // Reset theme on navigation to another one than the last visited
          this.ionicAngularThemeSwitchService.setTheme();
        }
      }

      if (event instanceof NavigationEnd) {
        if (this.selectedPath !== null) {
          // Reset theme on navigation to another page
          this.ionicAngularThemeSwitchService.setTheme();
        }
        // Highlight active menu item
        this.selectedPath = event.url.startsWith('/') ? event.url : '/' + event.url;
        this.storage.set('selectedPath', event.url);
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
