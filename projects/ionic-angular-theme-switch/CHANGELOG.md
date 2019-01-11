# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2019-01-11
### Added
- Component theme-switch-toggle: emit events (#9)

### Breaking
- Fails on other component than AppComponent (#8)  
  In your `AppModule`, change import `IonicAngularThemeSwitchToggleModule` to `IonicAngularThemeSwitchToggleModule.forRoot()`  
  and add `IonicAngularThemeSwitchToggleModule` to every PageModule using component `theme-switch-toggle`

## [0.1.0] - 2019-01-08
### Added
- Add `theme-switch-toggle` component (#4)
- Add named themes (#3)

## [0.0.3] - 2019-01-07
### Added
- Add this repo to package.json (#2)
- Add CHANGELOG.md (#1)

## [0.0.2] - 2019-01-06
- Fix initial release 

## [0.0.1] - 2019-01-06
- Initial release 
