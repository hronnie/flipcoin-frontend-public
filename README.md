# Flip Coin frontend

This project is for a simplified and improved trading tool with smart features including trading bots. This application is limited and not for broader audience. 

## Configuration
### Create and setup firebase
Firebase is used for the real time database, hosting and for user authentication. It uses 

- Create a gmail/google account which can be used
- Create and setup a new project at firebase console: https://console.firebase.google.com/u/1/
- Go to Realtime Database link and create a Realtime Database
- Update the Spark plan to Blaze (the free Spark plan cannot connect to external APIs and possibly other restrictions are in place)
- Angular uses @angular/fire library to connect with firebase. Here is how it was setup: https://fireship.io/snippets/install-angularfire/



## Development server

### Local server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Firebase deploy
The first 2 steps needed only for the first time. 

- Sign in to firebase: ``
  firebase login
  ``
  It will open a browser window where you can login.
- Initiate project: ``
  firebase init
  ``
  After starting init, it will ask which CLI features do you want to set. Select Database, Hosting and Emulators. In the next step: select that 
  you want to use an existing project (it was setup in the 'Create and setup firebase' section) and use flipcoin-cryptobot
- Deploy project: ``
  firebase deploy
  ``




## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
