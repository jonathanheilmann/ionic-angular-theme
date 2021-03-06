# IonicAngularTheme

Ionic angular application to hold ionic-angular-theme libraries and providing a simple working example.

How to build a library:  
[https://medium.com/@tomsu/how-to-build-a-library-for-angular-apps-4f9b38b0ed11](https://medium.com/@tomsu/how-to-build-a-library-for-angular-apps-4f9b38b0ed11)

## Demo app

This ionic angular application provides a demo on how to use the service or available components.

Current [GutHub branch `master`](https://github.com/jonathanheilmann/ionic-angular-theme/tree/master) can be found here: https://ionic-angular-theme.jonathan-heilmann.de
  
To run this app locally, follow these steps:
1. Clone GitHub repository `jonathanheilmann/ionic-angular-theme`  
 (`$git clone https://github.com/jonathanheilmann/ionic-angular-theme.git`)
1. Navigate `$cd ionic-angular-theme`
1. Install dependencies `$yarn install`
1. Build library `$ng build ionic-angular-theme-switch`
1. Run `$yarn start`


## ionic-angular-theme-switch

### Develop
Build and watch:
`ng build ionic-angular-theme-switch --watch`

### Deploy 
Build and dry run publish:  
`yarn run build:ionic-angular-theme-switch && cd dist/ionic-angular-theme-switch && npm publish --dry-run && cd ../../`

Build and publish:
- `yarn run build:ionic-angular-theme-switch`
- `cd dist/ionic-angular-theme-switch`
- `npm publish`

Build and publish in one step:  
`yarn run build:ionic-angular-theme-switch && cd dist/ionic-angular-theme-switch && npm publish && cd ../../`

Build and publish tag **dev** in one step:  
`yarn run build:ionic-angular-theme-switch && cd dist/ionic-angular-theme-switch && npm publish --tag dev && cd ../../`
