import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { IonicAngularThemeSwitchToggleModule } from 'ionic-angular-theme-switch';

import { SwitchThemeTogglePage } from './switch-theme-toggle.page';

const routes: Routes = [
  {
    path: '',
    component: SwitchThemeTogglePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicAngularThemeSwitchToggleModule
  ],
  declarations: [SwitchThemeTogglePage]
})
export class SwitchThemeTogglePageModule {}
