# Flip Coin frontend

This project is for a simplified and improved trading tool with smart features including trading bots. This application is limited and not for broader audience. 

## Configuration
### Create and setup firebase
Firebase is used for the real time database, hosting and for user authentication. It uses 

- Create a gmail/google account which can be used
- Create and setup a new project at firebase console: https://console.firebase.google.com/u/1/
- Update the Spark plan to Blaze (the free Spark plan cannot connect to external APIs and possibly other restrictions are in place)
- Angular uses @angular/fire library to connect with firebase. Here is how it was setup: https://fireship.io/snippets/install-angularfire/
    - From your Firebase project click the gear icon next to “Project Overview” to bring you to your project settings. On the general tab, in the *Your apps” section, click the </> button. This opens a popup called Add Firebase to your web app. Click on hosting as well. You only need to copy the config object from this page.
    - When project was created click on Config radio button
    - Add this const firebaseConfig.ts in app/config/.. (it's on gitignore) and also use export before const :
```
export const firebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx",
    databaseURL: "xxxx",
    projectId: "xxxx",
    storageBucket: "xxxx",
    messagingSenderId: "xxxx",
    appId: "xxxx",
    measurementId: "xxxx"
};
```
- Add your own user: Go to firebase console and go to Authentication. 
  - Go to Sign-in method and enable only the Email/password
  - Go to Users and add your email/password.

## Development server

### Local server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Firebase deploy
(This description is based on https://dzone.com/articles/how-to-deploy-angular-app-on-firebase)
The first 2 steps needed only for the first time. 

- Sign in to firebase: ``
  firebase login
  ``
  It will open a browser window where you can login.
- Initiate project: ``
  firebase init
  ``
  - After starting init, it will ask which CLI features do you want to set. Select 'Hosting: Configure and deploy Firebase Hosting sites'. In the next step: select that 
    you want to use an existing project (it was setup in the 'Create and setup firebase' section) and use the same as for flipcoin-service-main.
  - Type “No” to the "Configure as a single-page app" option since we will configure it by updating firebase.json file later on
  - Delete the newly created index.html file since we already have an index.html in our app project folder.
  - Overwrite your firebase.json: 
```
{
  "database": {
    "rules": "database.rules.json"
  },
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "*",
        "destination": "/index.html"
      }
    ],
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  },
  "emulators": {
    "database": {
      "port": 9000
    },
    "hosting": {
      "port": 5000
    },
    "ui": {
      "enabled": true
    }
  }
}

```
  - Your .firebaserc file should look like this
```
{ 
  "projects": {
    "default": "[your firebase project name]"
  }
}

```
  - Add new environment.prod.ts under src/environments with the following content: 
```
export const environment = {
  production: true,
  apiUrl: 'https://[your server path from flipcoin-service-main]/application/api'
};
```
- Build and deploy project to the cloud: 
```
npm run deploy
```

