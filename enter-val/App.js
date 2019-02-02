import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'
import firebase from 'firebase'

//!! this is where we import new "screens"
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import CreateTask from './screens/CreateTask';
import Login from './screens/Login';
import SignUp from './screens/SignUp';


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

//!! this renders new screens for them to be used in the app
const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen, header:{visible:false}},
  SettingsScreen: { screen: SignUp },
  UserScreen: { screen: UserScreen },
  CreateTask: { screen: CreateTask },
  Login: {screen: Login},
  // SignUp: {screen: SignUp}
});


//!! this container was created during V3 and is required for the routes to work
const App = createAppContainer(AppNavigator);


//!! it also needs to be exported
export default App;