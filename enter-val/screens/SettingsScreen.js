//!! this is actually the log in page so design it as so :)
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import Button from 'react-native-button';



export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View>
        <Button
          style={{ fontSize: 20, color: '#fff', marginTop: 275, borderColor: '#fa8072', backgroundColor: '#fa8072', padding: 4, paddingLeft: 20, paddingRight: 20, borderRadius: 5, overflow: 'hidden' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this.props.navigation.navigate('UserScreen')}>
          Log in
            </Button>
      </View>
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
  content: {
    fontSize: 15,
    fontStyle: 'italic'
  }
});