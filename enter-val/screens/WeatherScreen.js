import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const APIkey = '166a433c57516f51dfab1f7edaed8413'

export default class App extends React.Component {
  state = {
    temperature: 0,
    maxTemp: 0,
    minTemp: 0,
    weatherCondition: null
  }

  componentDidMount() {
    this.fetchWeather('Atlanta');
  }

  fetchWeather(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIkey}`
    )
      .then(res => res.json())
      .then(json => {
        const tempF = Math.round((json.main.temp - 273.15) * 9 / 5 + 32);
        const maxF = Math.round((json.main.temp_max - 273.15) * 9 / 5 + 32);
        const minF = Math.round((json.main.temp_min - 273.15) * 9 / 5 + 32);
        const cond = json.weather[0].main
        this.setState({
          temperature: tempF,
          maxTemp: maxF,
          minTemp: minF,
          weatherCondition: cond
        })
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <MaterialCommunityIcons name={conditions['Clear'].icon} size={75} color = {conditions['Clear'].color}/>
        <Text>ATLANTA</Text>
        <Text>Temperature: {this.state.temperature}º</Text>
        <Text>Max: {this.state.maxTemp}º | Min: {this.state.minTemp}º </Text>
        <Text>{conditions['Clear'].subtitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const conditions = {
  Rain: {
    subtitle: 'Get a cup of coffee and a blanket',
    icon: 'weather-rainy'
  },
  Clear: {
    subtitle: 'Sunny day today',
    icon: 'weather-sunny',
    color: 'gold'
  },
  Thunderstorm: {
    subtitle: 'Be careful!',
    icon: 'weather-lightning'
  },
  Clouds: {
    subtitle: 'Not much sun today',
    icon: 'weather-cloudy'
  },

  Snow: {
    subtitle: 'Ice ice baby',
    icon: 'weather-snowy'
  },
  Drizzle: {
    subtitle: 'Partially raining',
    icon: 'weather-hail'
  },
  Haze: {
    subtitle: 'Another name for Partial Raining',
    icon: 'weather-hail'
  },
  Mist: {
    subtitle: 'Watch out!',
    icon: 'weather-fog'
  }
};

