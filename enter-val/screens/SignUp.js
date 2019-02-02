// SignUp.js
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native';
import firebase from 'firebase';

export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email,
        this.state.password)
      .then(() => this.props.navigation.navigate('UserScreen'))
      .catch(error => this.setState({ errorMessage: error.message }))
    // TODO: Firebase stuff...
    console.log('handleSignUp')
  }
  render() {
    return (
      <ImageBackground style={{
        flex: 1,
        resizeMode: 'cover'
      }}
        source={require('../assets/images/bg.jpg')}
        blurRadius={5}>

        <View style={styles.container}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20, color: '#fff' }}>
            Get Started with EnterVal</Text>

          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>}
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="black"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <TouchableOpacity style={styles.signup} title="Sign Up" onPress={this.handleSignUp} />
          <TouchableOpacity style={styles.login}
            title="Already have an account? Login"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      </ImageBackground >
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 200,
    color: '#fff',
    borderRadius: 5,
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
    marginTop: 8,
    color: 'black',
    borderRadius: 5,
  },
  signup: {
    height: 35,
    width: '35%',
    borderColor: '#e9967a',
    backgroundColor: '#e9967a',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5,
  },
  login: {
    height: 35,
    width: '35%',
    borderColor: '#e9967a',
    backgroundColor: '#e9967a',
    borderWidth: 1,
    marginTop: 8,
    color: '#fff',
    borderRadius: 5,
  },
})
