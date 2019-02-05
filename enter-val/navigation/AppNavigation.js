import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import UserScreen from '../screens/UserScreen';
import CreateTask from '../screens/CreateTask';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const AppNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen, header: { visible: false } },
    SignUp: { screen: SignUp }, //Setting will be change to Sign Up la
    UserScreen: { screen: UserScreen },
    CreateTask: { screen: CreateTask },
    Login: { screen: Login },
});


export default createAppContainer(AppNavigator);