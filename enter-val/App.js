import React from 'react';
import AppNavigation from './navigation/AppNavigation';
// import firebase from './firebase';
import firebase from 'firebase';

console.log('Firebase Initialize: ', firebase.INTERNAL)

const fbConfig = {
  apiKey: "AIzaSyC39Tg6mBtYAMmd57SOJaRHM6KAqoEoZoI",
  authDomain: "enterval-db.firebaseapp.com",
  databaseURL: "https://enterval-db.firebaseio.com",
  projectId: "enterval-db",
  storageBucket: "",
  messagingSenderId: "529572747658"
}


// Initialize firebase instance
firebase.initializeApp(fbConfig)




// Setup react-redux so that connect HOC can be used
const App = () => (
    <AppNavigation />
);


//!! it also needs to be exported
export default App;