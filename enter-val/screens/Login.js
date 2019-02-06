// Login.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native'
import firebase from 'firebase'
export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
      const { email, password } = this.state
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('UserScreen'))
        .catch(error => this.setState({ errorMessage: error.message}))
    // TODO: Firebase stuff...
    console.log('handleLogin')
  }
  render() {
    return (
      <ImageBackground style={{
        flex: 1,
        resizeMode: 'cover'
      }}
        source={require('../assets/images/cloudgif.gif')}
        >
      <View style={styles.container}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20, color: 'black', marginTop: 35}}>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholderTextColor="black"
          style={styles.textInput}
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholderTextColor="black"
          placeholder="Password"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity style={styles.login}
            onPress={() => this.props.navigation.navigate('Login')}
          >
          <Text style={{ color: '#fff', fontWeight: 'bold', marginTop: 5}}>Login</Text>
          </TouchableOpacity>
      </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 300,
    color: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 280,
    borderColor: '#ffffff78',
    backgroundColor: '#ffffff78',
    marginLeft: 5, 
    marginRight: 5,
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'black',
    backgroundColor: 'transparent',
    borderWidth: 1,
    marginTop: 8,
    color: 'black',
    borderRadius: 10,
    padding: 5,
    zIndex: 1,
  },
  login: {
    height: 35,
    width: '35%',
    borderColor: '#e9967a',
    backgroundColor: '#e9967a',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
})