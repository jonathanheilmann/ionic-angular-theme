# ionic-angular-theme-switch

This ionic angular switch theme service can be used to easily change your app's theme on the fly.  
The actual theme will be stored and restored on reload or revisitation.

To simplify usage, this library provides one component to toggle between two themes and another component to select one of multiple themes.

## Demo app
The ionic angular application holding this library provides a demo on how to use the service or available components.  
To run this app, follow these steps:
1. Clone GitHub repository `jonathanheilmann/ionic-angular-theme`  
 (`$git clone https://github.com/jonathanheilmann/ionic-angular-theme.git`)
1. Navigate `$cd ionic-angular-theme`
1. Install dependencies `$yarn install`
1. Build library `$ng build ionic-angular-theme-switch`
1. Run `$yarn start`

## Inspired by
https://angularfirebase.com/lessons/css-variables-in-ionic-4/  
https://github.com/AngularFirebase/128-ionic4-theme-generator

# Integrate service in Ionic v4 project
For basic theming see: https://beta.ionicframework.com/docs/theming/color-generator  
For advanced application colors see: https://beta.ionicframework.com/docs/theming/advanced#application-colors


1. Resolve peer dependencies:  
`yarn add @angular/common @angular/core @ionic/angular @ionic/storage color`

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
       }, 'dark');
 
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
2. **name**  
Description: Theme name  
Type: `string`  
Default: `` (empty string)

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

### getStoredThemeName()
**Returns:** Promise with the actual stored theme name.


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

# Components

## theme-switch-toggle
This component should be used if there is a `default` and an `alternative` theme selectable by user via [toggle](https://beta.ionicframework.com/docs/api/toggle).

### Usage

1. Resolve peer dependencies:  
`yarn add @angular/common @angular/core @ionic/angular @ionic/storage color`

1. Add `IonicAngularThemeSwitchToggleModule.forRoot()` to your `AppModule`'s `imports` 
 
       import { IonicAngularThemeSwitchToggleModule } from 'ionic-angular-theme-switch';
        
       @NgModule({
         imports: [
           ...
           IonicAngularThemeSwitchToggleModule.forRoot(),
           ...
         ]
       })
       export class AppModule {}

1. Add `IonicAngularThemeSwitchToggleModule` to your `NgModule` `imports` where you are using the component

       import { IonicAngularThemeSwitchToggleModule } from 'ionic-angular-theme-switch';
        
       @NgModule({
         imports: [
           ...
           IonicAngularThemeSwitchToggleModule,
           ...
         ]
       })
       export class MyPageModule {}
       
1. Integrate component  
    **TypeScript**:  
    ```typescript
    import { ToggleThemes } from 'ionic-angular-theme-switch';
    
    public themes: ToggleThemes = {
      default: {
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
      },
      alternative: {
        primary: '#ff7f50',
        secondary: '#17deee',
        tertiary: '#ff4162',
        success: '#39ff14',
        warning: '#ffce00',
        danger: '#f04141',
        light: '#f4f5f8',
        medium: '#989aa2',
        dark: '#222428',
    
        'ion-background-color': '#778899',
                                         
        /* Component Colors */
        'ion-backdrop-color': '#556677',
        'ion-overlay-background-color': '#667788',
   
        'ion-border-color': '#5bff76',
        'ion-box-shadow-color': '#000',
   
        'ion-item-background': '#667788',
        'ion-item-border-color': '#5bff76'
      }
    }
    ```
    
    **HTML Template**:  
    ```html
    <theme-switch-toggle [themes]="themes"></theme-switch-toggle>
    ```

### Properties

#### themes
Object of `default` and `alternative` theme colors.  
**Attribute**: `themes`  
**Type**: `ToggleThemes`

#### color
Inherited from [ion-toggle](https://beta.ionicframework.com/docs/api/toggle#properties)

#### disabled
Inherited from [ion-toggle](https://beta.ionicframework.com/docs/api/toggle#properties)

#### mode
Inherited from [ion-toggle](https://beta.ionicframework.com/docs/api/toggle#properties)

### Events

### ionBlur
Inherited from [ion-toggle](https://beta.ionicframework.com/docs/api/toggle#events)

### ionChange
Inherited from [ion-toggle](https://beta.ionicframework.com/docs/api/toggle#events)  
ionChange is emitted **before** change is processed by this component!

### ionFocus
Inherited from [ion-toggle](https://beta.ionicframework.com/docs/api/toggle#events)

### Interfaces

#### ToggleThemes

```typescript
{
  default: IonicColors;
  alternative: IonicColors;
}
```

## theme-switch-select
This component should be used if there are multiple themes selectable by user via [select](https://beta.ionicframework.com/docs/api/select).

### Usage

1. Resolve peer dependencies:  
`yarn add @angular/common @angular/core @ionic/angular @ionic/storage color`

1. Add `IonicAngularThemeSwitchSelectModule.forRoot()` to your `AppModule`'s `imports` 
 
       import { IonicAngularThemeSwitchSelectModule } from 'ionic-angular-theme-switch';
        
       @NgModule({
         imports: [
           ...
           IonicAngularThemeSwitchSelectModule.forRoot(),
           ...
         ]
       })
       export class AppModule {}

1. Add `IonicAngularThemeSwitchSelectModule` to your `NgModule` `imports` where you are using the component

       import { IonicAngularThemeSwitchSelectModule } from 'ionic-angular-theme-switch';
        
       @NgModule({
         imports: [
           ...
           IonicAngularThemeSwitchSelectModule,
           ...
         ]
       })
       export class MyPageModule {}
       
1. Integrate component  
    **TypeScript**:  
    ```typescript
    import { SelectTheme } from 'ionic-angular-theme-switch';
    
    public themes: SelectTheme[] = [
      {
        key: 'default',
        theme: {}
      },
      {
        key: 'vibrant',
        label: 'Vibrant',
        theme: {
          primary: '#ff7f50',
          secondary: '#17deee',
          tertiary: '#ff4162',
          success: '#39ff14',
          warning: '#ffce00',
          danger: '#f04141',
          light: '#f4f5f8',
          medium: '#989aa2',
          dark: '#222428',
         
          'ion-background-color': '#778899',
         
          /* Component Colors */
          'ion-backdrop-color': '#556677',
          'ion-overlay-background-color': '#667788',
         
          'ion-border-color': '#5bff76',
          'ion-box-shadow-color': '#000',
         
          'ion-item-background': '#667788',
          'ion-item-border-color': '#5bff76'
         }
      },
      {
        key: 'dark',
        label: 'Dark',
        theme: {
          'ion-background-color': '#171717',
          'ion-text-color': '#fff',
         
          /* Component Colors */
          'ion-backdrop-color': '#2e2e2e',
          'ion-overlay-background-color': '#454545',
         
          'ion-border-color': '#5d5d5d',
          'ion-box-shadow-color': '#000',
         
          'ion-item-background': '#2e2e2e',
          'ion-item-background-activated': '#454545'
        }
      },
      {
        key: 'oceanic',
        label: 'Oceanic',
        theme: {
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
          'ion-text-color': '#fff',
         
          /* Component Colors */
          'ion-backdrop-color': '#1b2b34',
          'ion-overlay-background-color': '#142129',
         
          'ion-border-color': '#1b2b34',
          'ion-box-shadow-color': '#000',
         
          'ion-item-background': '#343d46',
          'ion-item-background-activated': '#232b34'
         }
      }
      ];
    ```
    
    **HTML Template**:  
    ```html
    <theme-switch-select [themes]="themes"></theme-switch-toggle>
    ```

### Properties

#### themes
Object of themes.  
**Attribute**: `themes`  
**Type**: `SelectTheme[]`

#### cancel
Inherited from [ion-select](https://beta.ionicframework.com/docs/api/select#properties)

#### disabled
Inherited from [ion-select](https://beta.ionicframework.com/docs/api/select#properties)

#### interface
Inherited from [ion-select](https://beta.ionicframework.com/docs/api/select#properties)

#### interfaceOptions
Inherited from [ion-select](https://beta.ionicframework.com/docs/api/select#properties)

#### mode
Inherited from [ion-select](https://beta.ionicframework.com/docs/api/select#properties)

#### okText
Inherited from [ion-select](https://beta.ionicframework.com/docs/api/select#properties)

#### selectedText
Inherited from [ion-select](https://beta.ionicframework.com/docs/api/select#properties)

### Events

### ionBlur
Inherited from [ion-select](https://beta.ionicframework.com/docs/api/select#events)

### ionCancel
Inherited from [ion-select](https://beta.ionicframework.com/docs/api/select#events) 

### ionChange
Inherited from [ion-select](https://beta.ionicframework.com/docs/api/select#events)  
ionChange is emitted **before** change is processed by this component!

### ionFocus
Inherited from [ion-select](https://beta.ionicframework.com/docs/api/select#events)

### Interfaces

#### SelectTheme

```typescript
{
  key: string;
  label?: string; // If (localized) label is not set, the key is used as select option label
  theme: IonicColors;
}
```
## Changelog

[CHANGELOG.md](https://github.com/jonathanheilmann/ionic-angular-theme/blob/master/projects/ionic-angular-theme-switch/CHANGELOG.md)
