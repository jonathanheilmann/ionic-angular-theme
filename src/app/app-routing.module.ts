import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch: 'full'
  }, {
    path: 'service',
    loadChildren: './pages/service/service.module#ServicePageModule'
  }, {
    path: 'switch-theme-toggle',
    loadChildren: './pages/switch-theme-toggle/switch-theme-toggle.module#SwitchThemeTogglePageModule'
  }, {
    path: 'introduction',
    loadChildren: './pages/introduction/introduction.module#IntroductionPageModule'
  }, {
    path: 'switch-theme-select',
    loadChildren: './pages/switch-theme-select/switch-theme-select.module#SwitchThemeSelectPageModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
