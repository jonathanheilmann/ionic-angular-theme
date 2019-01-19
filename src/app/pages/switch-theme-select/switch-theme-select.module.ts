import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { IonicAngularThemeSwitchSelectModule } from 'ionic-angular-theme-switch';

import { SwitchThemeSelectPage } from './switch-theme-select.page';

const routes: Routes = [
  {
    path: '',
    component: SwitchThemeSelectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicAngularThemeSwitchSelectModule
  ],
  declarations: [SwitchThemeSelectPage]
})
export class SwitchThemeSelectPageModule {}
