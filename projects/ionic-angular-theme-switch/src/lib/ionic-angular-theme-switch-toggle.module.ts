import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicAngularThemeSwitchToggleComponent } from './ionic-angular-theme-switch-toggle.component';
import { IonicAngularThemeSwitchService } from './ionic-angular-theme-switch.service';

@NgModule({
  declarations: [
    IonicAngularThemeSwitchToggleComponent
  ],
  imports: [
    IonicStorageModule.forRoot()
  ],
  providers: [
    IonicAngularThemeSwitchService
  ],
  exports: [
    IonicAngularThemeSwitchToggleComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class IonicAngularThemeSwitchToggleModule {
}
