import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {
  Card
} from 'react-native-elements';
import { FloatingAction } from 'react-native-floating-action';


export default class UserScreen extends React.Component {
  render() {
    return (

      <ScrollView style={{ paddingVertical: 20 }}>

        <Card title='8:00 - 11:00 AM'>
          <View
            style={{
              backgroundColor: '#bcbec1',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              borderRadius: 40,
              alignSelf: 'center',
              marginBottom: 20
            }}
          >
            <Text style={{ color: 'white', fontSize: 28 }}>JD</Text>
          </View>
        </Card>
        <Card title='11:00 - 2:00 PM'>
          <View
            style={{
              backgroundColor: '#bcbec1',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              borderRadius: 40,
              alignSelf: 'center',
              marginBottom: 20
            }}
          >
            <Text style={{ color: 'white', fontSize: 28 }}>JD</Text>
          </View>
        </Card>

        <Card title='2:00 - 6:00 PM'>
          <View
            style={{
              backgroundColor: '#bcbec1',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              borderRadius: 40,
              alignSelf: 'center',
              marginBottom: 20
            }}
          >
            <Text style={{ color: 'white', fontSize: 28 }}>JD</Text>
          </View>
        </Card>

        <Card title='6:00 - 10:00 PM'>
          <View
            style={{
              backgroundColor: '#bcbec1',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              borderRadius: 40,
              alignSelf: 'center',
              marginBottom: 20
            }}
          >
            <Text style={{ color: 'white', fontSize: 28 }}>JD</Text>
          </View>
        </Card>

    
        <FloatingAction style={{ backgroundColor: '#fa8072' }}
          actions={actions}
          onPressItem={
            (name) => {
              console.log(`selected button: ${name}`);
            }
          }
        />

      </ScrollView>
    );
  }
}

const actions = [{
  text: 'Home',
  name: 'bt_accessibility',
  position: 1
}, {
  text: 'Add a Task',
  name: 'bt_language',
  position: 2
}, {
  text: 'Notes',
  name: 'bt_room',
  position: 3
}, {
  text: 'Log Out',
  name: 'bt_videocam',
  position: 4
}];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  button: { 
    color: '#fa8072'
  }
});