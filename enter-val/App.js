import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import firebase from 'firebase'
import AppNavigation from './navigation/AppNavigation';
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import firebaseApp from './firebase';

// console.log('Firebase Initialize: ', firebaseApp)
// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
// import { ReactReduxFirebaseProvider, firebaseReducer, getFirebase, reactReduxFirebase } from 'react-redux-firebase'
// import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
import rootReducer from './redux/store/reducers/rootReducer'

// const fbConfig = {
//   apiKey: "AIzaSyC39Tg6mBtYAMmd57SOJaRHM6KAqoEoZoI",
//   authDomain: "enterval-db.firebaseapp.com",
//   databaseURL: "https://enterval-db.firebaseio.com",
//   projectId: "enterval-db",
//   storageBucket: "",
//   messagingSenderId: "529572747658"
// }

// // react-redux-firebase config
// const rrfConfig = {
//   userProfile: 'users',
//   // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
// }

// // Initialize firebase instance
// firebase.initializeApp(fbConfig)

// // Initialize other services on firebase instance
// firebase.firestore() // <- needed if using firestore
// // firebase.functions() // <- needed if using httpsCallable



// Create store with reducers and initial state
// const initialState = {}
// const store = createStore(rootReducer, initialState, compose(
// //   applyMiddleware(thunk),
// ))

const store = createStore(rootReducer);

// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance
// }

// Setup react-redux so that connect HOC can be used
const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);


//!! it also needs to be exported
export default App;