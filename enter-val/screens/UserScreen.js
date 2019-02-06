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
//connect to the store. Glues redux to react
import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';

class UserScreen extends React.Component {
  render() {
    const { tasks } = this.props
    return (

      <ScrollView style={{ paddingVertical: 20, marginTop: 15 }}>

        <View>
          <Text style={styles.title}>
            Today
        </Text>
        </View>

        {/* passing the props refered to tasks to the card component */}
        <CardComp tasks={tasks} />


        {/* TODO Create a component fort the button */}
        <View>
          <View style={{ flex: 1, backgroundColor: '#f3f3f3', marginTop: 250 }}>
            {/* Rest of the app comes ABOVE the action button component !*/}
            <ActionButton buttonColor='#1e90ff'>

              {/* New Task Button */}
              <ActionButton.Item buttonColor='#1e90ff' title="New Task" onPress={() => this.props.navigation.navigate('CreateTask')}>
                <Icon name="md-create" style={styles.actionButtonIcon} />
              </ActionButton.Item>

              <ActionButton.Item buttonColor='#1e90ff' title="Weather" onPress={() => this.props.navigation.navigate('HomeScreen')}>
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
    );
  }
}

//map all the states contained in the store (redux). Inside the rootReducer we have task and inside that file is tasks (taskReducer)
const mapStateToProps = state => {
  console.log(state);
  return {
    tasks: state.task.tasks
  }
}

export default connect(mapStateToProps)(UserScreen);


// export default compose(
//   connect(mapStateToProps),
//   // firestoreConnect([
//   //   { collection: 'tasks' } //when the component is active we are gonna to listen to the tasks collection
//   // ])
// )(UserScreen);





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
