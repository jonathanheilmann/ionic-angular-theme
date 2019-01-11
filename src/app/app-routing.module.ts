import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
