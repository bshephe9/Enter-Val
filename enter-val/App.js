import React from 'react';
import AppNavigation from './navigation/AppNavigation';
// import firebase from './firebase';
import firebase from 'firebase';
import config from './config/config';

// console.log('Firebase Initialize: ', firebase.INTERNAL)


// Initialize firebase instance
firebase.initializeApp(config)
console.log('Firebase Initialized!');


// Setup react-redux so that connect HOC can be used
const App = () => (
    <AppNavigation />
);


//!! it also needs to be exported
export default App;