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
      <ImageBackground style={{
        flex: 1,
        resizeMode: 'cover',
        }}
        source={require('../assets/images/bg.jpg')}>

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
            <Text style={styles.content}>"Keep going. Be all in."</Text>
          </View>

          <View>
            <Button
              style={{ fontSize: 20, color: '#fff', marginTop: 300, borderColor: '#fa8072', backgroundColor: '#556b2f', padding: 4, paddingLeft: 20, paddingRight: 20, borderRadius: 5, overflow: 'hidden', }}
              onPress={() => this.props.navigation.navigate('SettingsScreen')}>
              get started
            </Button>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  overlayContainer: {
    alignItems: 'center',
    color: 'black',
    marginTop: 15,
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
    marginTop: 10,
    marginBottom: 10
  },
  content: {
    fontSize: 15,
    fontStyle: 'italic'
  }
});
