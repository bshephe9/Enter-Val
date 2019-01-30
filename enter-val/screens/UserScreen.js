import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';

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
          <Text style={styles.content}>"Keep going. Be all in."</Text>
        </View>

        <View>

          <Button
            style={{ fontSize: 20, color: '#fff', marginTop: 300, borderColor: '#fa8072', backgroundColor: '#fa8072', padding: 4, paddingLeft: 20, paddingRight: 20, borderRadius: 5, overflow: 'hidden' }}
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
container: {
  flex: 1,
  width: '100%',
  height: '100%',
},
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
