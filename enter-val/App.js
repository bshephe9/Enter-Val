import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'

//!! this is where we import new "screens"
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen'
import UserScreen from './screens/UserScreen';
import CreateTask from './screens/CreateTask';

//!! this is the conection to Firebase!
 // Initialize Firebase
 const firebaseConfig = {
  apiKey: "AIzaSyBr5d75r-qEKTaB6C0557OogBoH4TxIy-Q",
  authDomain: "enter-val.firebaseapp.com",
  databaseURL: "https://enter-val.firebaseio.com",
  projectId: "enter-val",
  storageBucket: "enter-val.appspot.com",
  messagingSenderId: "987810672302"
};
firebase.initializeApp(firebaseConfig);

//!! this renders new screens for them to be used in the app
const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  SettingsScreen: { screen: SettingsScreen },
  UserScreen: { screen: UserScreen },
  CreateTask: { screen: CreateTask }
});


//!! this container was created during V3 and is required for the routes to work
const App = createAppContainer(AppNavigator);


//!! it also needs to be exported
export default App;