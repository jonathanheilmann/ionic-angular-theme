import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { bootstrapIonicAngularThemeSwitch, IonicAngularThemeSwitchService } from 'ionic-angular-theme-switch';

import { ServicePage } from './service.page';

const routes: Routes = [
  {
    path: '',
    component: ServicePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    IonicAngularThemeSwitchService,
    {
      provide: APP_INITIALIZER,
      useFactory: bootstrapIonicAngularThemeSwitch,
      deps: [ IonicAngularThemeSwitchService ],
      multi: true
    }
  ],
  declarations: [
    ServicePage
  ]
})
export class ServicePageModule {
}
