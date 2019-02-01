import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  // Todo: Remove these after adding Form functionality
  TextInput,
  Button
} from 'react-native';
// Todo: Same as above
import { Constants } from 'expo';
import {
  Card
} from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCjElFvJeU2q9NQH3fbK-J8_NCKF5jCCi0',
  authDomain: 'authenticationtest-4a489.firebaseapp.com',
  databaseURL: 'https://authenticationtest-4a489.firebaseio.com',
  projectId: 'authenticationtest-4a489',
  storageBucket: 'authenticationtest-4a489.appspot.com',
}
firebase.initializeApp(firebaseConfig)

export default class UserScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: '',
      messages: []
    }

    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    firebase
      .database()
      .ref()
      .child("messages")
      .once("value", snapshot => {
        const data = snapshot.val()
        if (snapshot.val()) {
          const initMessages = [];
          Object
            .keys(data)
            .forEach(message => initMessages.push(data[message]));
          this.setState({
            messages: initMessages
          })
        }
      });

    firebase
      .database()
      .ref()
      .child("messages")
      .on("child_added", snapshot => {
        const data = snapshot.val();
        if (data) {
          this.setState(prevState => ({
            messages: [data, ...prevState.messages]
          }))
        }
      })

  }

  addItem() {
    if (!this.state.message) return;

    const newMessage = firebase.database().ref()
      .child("messages")
      .push();
    newMessage.set(this.state.message, () => this.setState({ message: '' }))
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.msgBox}>
          <TextInput placeholder='Enter your message'
            value={this.state.message}
            onChangeText={(text) => this.setState({ message: text })}
            style={styles.txtInput} />
          <Button title='Send' onPress={this.addItem} />
        </View>
      </View>
      <Card data={this.state.messages}
        renderItem={
          ({ item }) =>
            <View style={styles.listItemContainer}>
              <Text style={styles.listItem}>
                {item}
              </Text>
            </View>
        }
    />
      <ScrollView style={{ paddingVertical: 20, marginTop: 15 }}>

        <View>
          <Text style={styles.title}>
            Today
        </Text>
        </View>
    

        <View>
          <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
            {/* Rest of the app comes ABOVE the action button component !*/}
            <ActionButton buttonColor='#1e90ff'>

              {/* New Task Button */}
              <ActionButton.Item buttonColor='#1e90ff' title="New Task" onPress={() => this.props.navigation.navigate('CreateTask')}>
                <Icon name="md-create" style={styles.actionButtonIcon} />
              </ActionButton.Item>

              {/* Home Button */}
              <ActionButton.Item buttonColor='#1e90ff' title="Home" onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Icon name="md-home" style={styles.actionButtonIcon} />
              </ActionButton.Item>

              {/* Sign Out Button */}
              <ActionButton.Item buttonColor='#1e90ff' title="Sign Out"
                //?? in here we have to add code for loging out if thats the purpose of this button!
                onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Icon name="md-done-all" style={styles.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton>
          </View>

        </View>

      </ScrollView>
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
  listItemContainer: { 
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5
  },
});
