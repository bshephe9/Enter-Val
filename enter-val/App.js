import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase'
import AppNavigation from './navigation/AppNavigation';
import rootReducer from './redux/store/reducers/rootReducer';

//Redux
import { Provider } from 'react-redux';
// import { store } from './redux/app-redux';
import {createStore} from 'redux';


//!! this is the conection to Firebase!
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBr5d75r-qEKTaB6C0557OogBoH4TxIy-Q",
  authDomain: "enter-val.firebaseapp.com",
  databaseURL: "https://enter-val.firebaseio.com",
  projectId: "enter-val",
  storageBucket: "enter-val.appspot.com",
};
firebase.initializeApp(firebaseConfig);


// Store for redux with the reducer rootReducer
const store = createStore(rootReducer);


//!! this container was created during V3 and is required for the routes to work
class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
      <AppNavigation />
      </Provider>
    )
  }
}


//!! it also needs to be exported
export default App;