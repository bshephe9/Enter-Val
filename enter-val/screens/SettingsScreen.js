//!! this is actually the log in page so design it as so :)
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Button from 'react-native-button';



export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View>
        <Button
          style={{ fontSize: 20, color: '#fff', marginTop: 700, marginLeft: 100, marginRight: 100, borderColor: '#fa8072', backgroundColor: '#fa8072', padding: 4, paddingLeft: 5, paddingRight: 5, borderRadius: 5, overflow: 'hidden' }}
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
});