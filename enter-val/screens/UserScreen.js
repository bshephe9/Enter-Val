import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet
} from 'react-native';
import {
  Card
} from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class UserScreen extends React.Component {
  render() {
    return (

      <ScrollView style={{ paddingVertical: 20, marginTop: 15}}>

      <View> 
        <Text style={styles.title}>
          Today
        </Text>
      </View>

        <Card title='8:00 - 11:00 AM'>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              marginBottom: 20,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={styles.text}>
              Insert
            </Text>
          </View>
        </Card>
        <Card title='11:00 - 2:00 PM'>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              borderRadius: 40,
              alignSelf: 'center',
              marginBottom: 20
            }}
          >
            <Text style={styles.text}>
                      Insert
            </Text>
          </View>
        </Card>

        <Card title='2:00 - 6:00 PM'>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              borderRadius: 40,
              alignSelf: 'center',
              marginBottom: 20
            }}
          >
            <Text style={styles.text}>
              Insert
            </Text>
          </View>
        </Card>

        <View>
          <View style={{ flex: 1, backgroundColor: '#f3f3f3'}}>
            {/* Rest of the app comes ABOVE the action button component !*/}
            <ActionButton buttonColor='#1e90ff'>

              {/* New Task Button */}
              <ActionButton.Item buttonColor='#1e90ff' title="New Task" onPress={() => console.log("notes tapped!")}>
                <Icon name="md-create" style={styles.actionButtonIcon} />
              </ActionButton.Item>

              {/* Home Button */}
              <ActionButton.Item buttonColor='#1e90ff' title="Home" onPress={() => { }}>
                <Icon name="md-home" style={styles.actionButtonIcon} />
              </ActionButton.Item>

              {/* Sign Out Button */}
              <ActionButton.Item buttonColor='#1e90ff' title="Sign Out" onPress={() => { }}>
                <Icon name="md-done-all" style={styles.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton>
          </View>

        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  title: { 
    fontWeight: 'bold', 
    fontSize: 25, 
    textAlign: 'center',
    marginBottom: 15,
    color: '#1e90ff',
  },
});