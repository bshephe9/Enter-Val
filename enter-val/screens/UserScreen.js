import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import CardComp from '../components/Card';
import firebase from 'firebase';


class UserScreen extends React.Component {
  state = {
    tasks: []
  }
  componentDidMount() {
    this.connecting();
    console.log('Example!');
  }


  connecting() {
    firebase.database().ref().on('child_added', snap => {
      const tasksArr = {
        startTime: snap.val().startTime,
        endTime: snap.val().endTime,
        task: snap.val().task,
        body: snap.val().body,
        id: snap.val().id
      }
      let tasks = [...this.state.tasks]
      tasks.push(tasksArr)
      this.setState({ tasks })
      console.log(this.state.tasks)
    })
  }

  render() {
    return (
      <ScrollView style={{ paddingVertical: 20, marginTop: 15 }}>

        <View>
          <Text style={styles.title}>
            Today
        </Text>
        </View>

        {/* passing the props refered to tasks to the card component */}
        {this.state.tasks.map (task => (
             <CardComp {...task} />
        ))}


        {/* TODO Create a component fort the button */}
        <View>
          <View style={{ flex: 1, backgroundColor: '#f3f3f3', marginTop: 250 }}>
            {/* Rest of the app comes ABOVE the action button component !*/}
            <ActionButton buttonColor='#9400d3'>

              {/* New Task Button */}
              <ActionButton.Item buttonColor='#9400d3' title="New Task" onPress={() => this.props.navigation.navigate('CreateTask')}>
                <Icon name="md-create" style={styles.actionButtonIcon} />
              </ActionButton.Item>

              {/* Home Button */}
              <ActionButton.Item buttonColor='#9400d3' title="Home" onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Icon name="md-home" style={styles.actionButtonIcon} />
              </ActionButton.Item>

              {/* Sign Out Button */}
              <ActionButton.Item buttonColor='#9400d3' title="Sign Out"
                //?? in here we have to add code for loging out if thats the purpose of this button!
                onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Icon name="md-done-all" style={styles.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton>
          </View>

        </View>

      </ScrollView>
    );
  }
}


export default UserScreen;



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
    color: '#9400d3',
  },
});
