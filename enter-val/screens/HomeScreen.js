import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import Button from 'react-native-button';

const APIKEY = '166a433c57516f51dfab1f7edaed8413';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    curTime: null,
    curDate: null,
    temperature: 0
  }
  componentDidMount() {
    this.fetchWeather('Atlanta');
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        curDate: new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })
      })
    }, 1000)    
  }

  fetchWeather(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`
    )
      .then(res => res.json())
      .then(json => {
        const tempF = Math.round((json.main.temp - 273.15) * 9 / 5 + 32);
        this.setState({ temperature: tempF});
      });
  }
  render() {
    return (
      <ImageBackground style={{
        flex: 1,
        resizeMode: 'cover',
      }}
        source={require('../assets/images/cloudgif.gif')}>

        <View style={styles.overlayContainer}>
          <View>
            <Text style={styles.timer}>{this.state.curDate}</Text>
          </View>
          <View>
            <Text style={styles.header}>enterVal</Text>
          </View>

          <View>
            <Text style={styles.clock}>{this.state.curTime}</Text>
          </View>
          <View>
            <Text style={styles.temp}>{this.state.temperature}º</Text>
          </View>

          <View>

            <Button
              style={{ fontSize: 20, color: '#fff', marginTop: 400, borderColor: '#fa8072', backgroundColor: '#e9967a', padding: 4, paddingLeft: 20, paddingRight: 20, borderRadius: 5, overflow: 'hidden', }}
              onPress={() => this.props.navigation.navigate('SignUp')}>
              get started
            </Button>
          </View>
          <View>
            <Text style={styles.content}>"Keep going. Be all in."</Text>
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
    marginTop: 75,
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
    marginTop: 30,
    marginBottom: 6
  },
  content: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#fff',
    marginTop: 75,
    fontWeight: 'bold'
  },
  temp:{ 
    marginTop: 10, 
    color: '#fff',
    fontSize: 20,
  }, 
  clock: { 
    marginTop: 10,
    color: '#fff',
    fontSize: 20,
  }
});
