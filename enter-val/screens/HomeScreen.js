import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import Button from 'react-native-button';



export default class HomeScreen extends React.Component {

  state = {
    curTime: null,
    curDate: null
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        curDate: new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })
      })
    }, 1000)
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={styles.container}>

        <View style={styles.overlayContainer}>
          <View>
            <Text style={styles.timer}>{this.state.curDate}</Text>
          </View>
          <View>
            <Text style={styles.header}>enterVal</Text>
          </View>

          <View>
            <Text style={styles.timer}>{this.state.curTime}</Text>
          </View>
          <View>
            <Button
              style={{ fontSize: 20, color: '#fff', marginTop: 255, borderColor: '#fa8072', backgroundColor: '#fa8072', padding: 4, paddingLeft: 20, paddingRight: 20, borderRadius: 5, overflow: 'hidden' }}
              styleDisabled={{ color: 'red' }}
              onPress={() => this.doSomething()}>
              get started
            </Button>
          </View>
        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    alignItems: 'center',
    color: 'black',
    marginTop: 120,
  },
  header: {
    fontSize: 35,
    borderColor: '#fff',
    fontWeight: 'bold',
    color: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
  timer: {
    color: '#fff',
    fontSize: 25,
    marginTop: 20,
  }
});