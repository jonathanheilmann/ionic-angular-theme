import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicAngularThemeSwitchToggleComponent } from './ionic-angular-theme-switch-toggle.component';
import { IonicAngularThemeSwitchService } from './ionic-angular-theme-switch.service';
import { bootstrapIonicAngularThemeSwitch } from './utilies';

@NgModule({
  declarations: [
    IonicAngularThemeSwitchToggleComponent
  ],
  imports: [
    IonicStorageModule
  ],
  exports: [
    IonicAngularThemeSwitchToggleComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class IonicAngularThemeSwitchToggleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicAngularThemeSwitchToggleModule,
      providers: [
        IonicAngularThemeSwitchService,
        {
          provide: APP_INITIALIZER,
          useFactory: bootstrapIonicAngularThemeSwitch,
          deps: [ IonicAngularThemeSwitchService ],
          multi: true
        }
      ]
    };
  }
}
