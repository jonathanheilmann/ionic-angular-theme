import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicAngularThemeSwitchSelectComponent } from './ionic-angular-theme-switch-select.component';
import { IonicAngularThemeSwitchService } from './ionic-angular-theme-switch.service';
import { bootstrapIonicAngularThemeSwitch } from './utilies';

@NgModule({
  declarations: [
    IonicAngularThemeSwitchSelectComponent
  ],
  imports: [
    CommonModule,
    IonicStorageModule
  ],
  exports: [
    IonicAngularThemeSwitchSelectComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class IonicAngularThemeSwitchSelectModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicAngularThemeSwitchSelectModule,
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
