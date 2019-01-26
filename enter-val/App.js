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


//!! this renders new screens for them to be used in the app
const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  SettingsScreen: { screen: SettingsScreen },
  UserScreen: { screen: UserScreen }
});


//!! this container was created during V3 and is required for the routes to work
const App = createAppContainer(AppNavigator);


//!! it also needs to be exported
export default App;















// import AppNavigator from './navigation/AppNavigator';

// export default class App extends React.Component {
//   state = {
//     isLoadingComplete: false,
//   };

//   render() {
//     if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
//       return (
//         <AppLoading
//           startAsync={this._loadResourcesAsync}
//           onError={this._handleLoadingError}
//           onFinish={this._handleFinishLoading}
//         />
//       );
//     } else {
//       return (
//         <View style={styles.container}>
//           {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//           <AppNavigator />
//         </View>
//       );
//     }
//   }

//   _loadResourcesAsync = async () => {
//     return Promise.all([
//       Asset.loadAsync([
//         require('./assets/images/robot-dev.png'),
//         require('./assets/images/robot-prod.png'),
//       ]),
//       Font.loadAsync({
//         // This is the font that we are using for our tab bar
//         ...Icon.Ionicons.font,
//         // We include SpaceMono because we use it in HomeScreen.js. Feel free
//         // to remove this if you are not using it in your app
//         'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//       }),
//     ]);
//   };

//   _handleLoadingError = error => {
//     // In this case, you might want to report the error to your error
//     // reporting service, for example Sentry
//     console.warn(error);
//   };

//   _handleFinishLoading = () => {
//     this.setState({ isLoadingComplete: true });
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
