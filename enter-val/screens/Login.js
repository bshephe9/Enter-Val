// Login.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'firebase'
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
      const { email, password } = this.state
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Main'))
        .catch(error => this.setState({ errorMessage: error.message}))
    // TODO: Firebase stuff...
    console.log('handleLogin')
  }