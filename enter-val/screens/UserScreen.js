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
    console.log('EXAMPLE!');
  }

  // componentDidUpdate(){
  //   this.connecting();
  //   console.log('HEY THERE ')
  // }

  connecting() {
    firebase.database().ref().on('child_added', snap => {
      const tasksArr = {
        startTime: snap.val().startTime,
        endTime: snap.val().endTime,
        task: snap.val().task,
        body: snap.val().body,
        id: snap.getRef().getKey()
      }
      let tasks = [...this.state.tasks]
      tasks.push(tasksArr)
      this.setState({ tasks })
      console.log(tasksArr.id);
    })
  }

  render() {
    return (
      <ScrollView style={{ paddingVertical: 20, marginTop: 15 }}>

        <View>
          <Text style={styles.title}>
            Today's Schedule
         </Text>
        </View>

        {/* passing the props refered to tasks to the card component */}
        {this.state.tasks.map (task => (
             <CardComp {...task} />
        ))}


        {/* TODO Create a component fort the button */}
        <View>
          <View style={{ flex: 1, backgroundColor: '#f3f3f3', position:' fixed', marginTop: 80 }}>
            {/* Rest of the app comes ABOVE the action button component !*/}
            <ActionButton buttonColor='#00008b'>

              {/* New Task Button */}
              <ActionButton.Item buttonColor='#00008b' title="New Task" onPress={() => this.props.navigation.navigate('CreateTask')}>
                <Icon name="md-create" style={styles.actionButtonIcon} />
              </ActionButton.Item>

              {/* Home Button */}
              <ActionButton.Item buttonColor='#00008b' title="Home" onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Icon name="md-home" style={styles.actionButtonIcon} />
              </ActionButton.Item>

              {/* Sign Out Button */}
              <ActionButton.Item buttonColor='#00008b' title="Sign Out"
                //?? in here we have to add code for loging out if thats the purpose of this button!
                onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Icon name="md-done-all" style={styles.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton>
          </View>

<<<<<<< HEAD
        <View>
          <FloatingAction 
            actions={actions}
            onPressItem={
              (name) => {
                this.props.navigation.navigate('HomeScreen');
              }
            }
          />
=======
>>>>>>> fa4cac1063dc366a667183d7460ac98a54a02044
        </View>

      </ScrollView>
    );
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
const actions = [{
  text: 'Home',
  name: 'bt_home',
  position: 1
}, {
  text: 'Tasks',
  name: 'bt_task',
  position: 2
}, {
  text: 'Notes',
  name: 'bt_notes',
  position: 3
}, {
  text: 'Log Out',
  name: 'bt_logout',
  position: 4
}];
=======
=======

export default UserScreen;


>>>>>>> f5d469e81310507553fcf202848079ff27227fbd
const styles = StyleSheet.create({

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
    color: '#00008b',
  },
});
<<<<<<< HEAD
>>>>>>> fa4cac1063dc366a667183d7460ac98a54a02044
=======
>>>>>>> f5d469e81310507553fcf202848079ff27227fbd
