import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import { Provider } from 'react-redux'
import firebaseApp from './firebase';
import firebase from 'firebase';

console.log('Firebase Initialize: ', firebaseApp)

import { createStore } from 'redux'
import taskReducer from './redux/store/reducers/taskReducer'

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


const store = createStore(taskReducer);



// Setup react-redux so that connect HOC can be used
const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);


//!! it also needs to be exported
export default App;