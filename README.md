# This is a project - Linkedin Clone

This project is built using [React](https://beta.reactjs.org), [Redux](https://redux.js.org/), css and [firebase](https://firebase.google.com/docs)

## Available Scripts

At first we need setup firebase here are the steps for the same
1 - Go to the url https://firebase.google.com/ and login
2 - Click on the Add project then complete the setup process( disable the option "Enable Google analytics for this project" before click on continue)
3 - Click on the "Build" then click on "Firestore Database"
4 - Click on the create database
5 - click on "test mode" and select any of the server and press "Enable"
6 - Click on "Rules" replace the codes present in the "Edit rules" section with this code below and click on "Publish" (Don't worry about the warning)
rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
match /{document=\*\*} {
allow read, write;
}
}
}
7 - Click on the "Authentication" the click on "Get started" then on "Sign-in method" and the press on "Email/Password" and "Enable" and click on the "save"
8 - Go to project settings on the right side of Project Preview
9 - Scroll down and click on the "</>" icon give a nickname for your project and tick on the "Also set up Firebase Hosting for this app" and then on "Register app" press "Next", "Next", "Continue to console"
10 - Then scroll down to "SDK setup and configuration" and click on "config" copy the whole block of code and replace that with the code in the ./src/firebase.js in the "const firebaseConfic = {....}" only
11 - Delete these files ".firebaserc", "firebase.json", ".firebase"

    Thats it to setup firebase

In the project directory, you can run:

### `install firebase`

### `npm install -g firebase-tools (to use firebase tools)`

### `firebase login (and complete the login process using the same account used in firebase setup)`

### `firebase init`

As some of the library is used in this project needs are become outdated so we need to run this command before npm start
, you have to run :

### `export NODE_OPTIONS=--openssl-legacy-provider`

You are all set and ready to use the app in the localhost using comands:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

To deploy and host the app use the comand:

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `firebase deploy`

Use the the link provided in the terminal to open the app
