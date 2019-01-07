# ionic-angular-theme-switch

This ionic angular switch theme service can be used to easily change your app's theme on the fly.  
The actual theme will be stored and restored on reload or revisitation.

---

Inspired by:  
https://angularfirebase.com/lessons/css-variables-in-ionic-4/  
https://github.com/AngularFirebase/128-ionic4-theme-generator

# Integrate in Ionic v4 project
For basic theming see: https://beta.ionicframework.com/docs/theming/color-generator  
For advanced application colors see: https://beta.ionicframework.com/docs/theming/advanced#application-colors


1. Resolve peer dependencies:  
`yarn add @angular/common @angular/core @ionic/storage color`
1. Add `IonicAngularThemeSwitchService` to your `AppModule`'s `providers` and `IonicStorageModule.forRoot()` to your `AppModule`'s `imports` 
 
       import { IonicAngularThemeSwitchService } from 'ionic-angular-theme-switch';
        
       @NgModule({
         imports: [
           ...
           IonicStorageModule.forRoot(),
           ...
         ],
         providers: [
           ...
           IonicAngularThemeSwitchService,
           ...
         ],
       })
       export class AppModule {}

3. In your `AppComponent` add this: 

       import { IonicAngularThemeSwitchService } from 'ionic-angular-theme-switch';
       
       export class AppComponent {
         constructor(
           ...
           private themeSwitchService: IonicAngularThemeSwitchService,
           ...
         ) {    
         }
       }
 
4. To change your theme use this snippet:

       this.themeSwitchService.setTheme({
         primary: '#549ee7',
         secondary: '#5fb3b3',
         tertiary: '#fac863',
         success: '#90d089',
         warning: '#f99157',
         danger: '#ec5f67',
         light: '#d8dee9',
         medium: '#65737e',
         dark: '#1b2b34',
       
         'ion-background-color': '#1b2b34',
         'ion-text-color': '#fff'
       });
 
5. To load the default ionic theme call

       this.themeSwitchService.setTheme();
 


## API

### setTheme()
Set theme with given colors.

**Parameters:**  
1. **theme**  
Description: Object of colors/CSS variables to set.  
Type: `IonicColors`  
Default: `{}`

### setVariable()
Set a single CSS variable.

**Parameters:**  
1. **name**  
Description: Name of the CSS variable.  
Type: `string`
2. **value**  
Description: Value if the CSS variable.  
Type: `string`

### getStoredTheme()
**Returns:** Promise with the actual stored theme as string.


## Interfaces

### IonicColors

```typescript
{
  primary?: string;
  secondary?: string;
  tertiary?: string;
  success?: string;
  warning?: string;
  danger?: string;
  dark?: string;
  medium?: string;
  light?: string;

  'ion-background-color'?: string;
  'ion-text-color'?: string;
  'ion-backdrop-color'?: string;
  'ion-overlay-background-color'?: string;
  'ion-border-color'?: string;
  'ion-box-shadow-color'?: string;
  'ion-tab-bar-background'?: string;
  'ion-tab-bar-background-focused'?: string;
  'ion-tab-bar-border-color'?: string;
  'ion-tab-bar-color'?: string;
  'ion-tab-bar-color-activated'?: string;
  'ion-toolbar-background'?: string;
  'ion-toolbar-border-color'?: string;
  'ion-toolbar-color'?: string;
  'ion-toolbar-color-activated'?: string;
  'ion-toolbar-color-unchecked'?: string;
  'ion-toolbar-color-checked'?: string;
  'ion-item-background'?: string;
  'ion-item-background-activated'?: string;
  'ion-item-border-color'?: string;
  'ion-item-color'?: string;
  'ion-placeholder-color'?: string;

  [key: string]: string;
}
```

## Changelog

[CHANGELOG.md](https://github.com/jonathanheilmann/ionic-angular-theme/blob/master/projects/ionic-angular-theme-switch/CHANGELOG.md)
