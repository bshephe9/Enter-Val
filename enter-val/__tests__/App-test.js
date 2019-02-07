import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import HomeScreen from '../screens/HomeScreen';
import CreateTask from "../screens/CreateTask";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import UserScreen from "../screens/UserScreen";
//TODO check if we need this
import SettingsScreen from "../screens/SettingsScreen";

//* testing App

it('App renders without crashing', () => {
const rendered = renderer.create(<App />).toJSON();
expect(rendered).toBeTruthy();
});

it('App test against snapshot', () => {
const tree = renderer.create(<App />).toJSON();
expect(tree).toMatchSnapshot();
});

//* testing HomeScreen

it('Home Screen renders without crashing', () => {
    const rendered = renderer.create(<HomeScreen />).toJSON();
    expect(rendered).toBeTruthy();
    });
    
    it('Home Screen test against snapshot', () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
    });

//* testing Login

it('Login renders without crashing', () => {
    const rendered = renderer.create(<Login />).toJSON();
    expect(rendered).toBeTruthy();
    });
    
    it('Login test against snapshot', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
    });    

//* testing Sign Up

it('Sign up renders without crashing', () => {
    const rendered = renderer.create(<SignUp />).toJSON();
    expect(rendered).toBeTruthy();
    });
    
    it('Sign up test against snapshot', () => {
    const tree = renderer.create(<SignUp />).toJSON();
    expect(tree).toMatchSnapshot();
    });

//* testing User Screen

it('User Screen renders without crashing', () => {
    const rendered = renderer.create(<UserScreen />).toJSON();
    expect(rendered).toBeTruthy();
    });
    
    it('User Screen test against snapshot', () => {
    const tree = renderer.create(<UserScreen />).toJSON();
    expect(tree).toMatchSnapshot();
    });

//* testing Tasks

it('Tasks Page renders without crashing', () => {
    const rendered = renderer.create(<CreateTask />).toJSON();
    expect(rendered).toBeTruthy();
    });
    
    it('Tasks Page test against snapshot', () => {
    const tree = renderer.create(<CreateTask />).toJSON();
    expect(tree).toMatchSnapshot();
    });

//TODO testing SettingsScreen?? 

it('Settings renders without crashing', () => {
    const rendered = renderer.create(<SettingsScreen />).toJSON();
    expect(rendered).toBeTruthy();
    });
    
    it('Settings test against snapshot', () => {
    const tree = renderer.create(<SettingsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
    });