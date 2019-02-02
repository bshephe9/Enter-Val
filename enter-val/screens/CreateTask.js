import React from 'react';
import { ScrollView, View, Button, Text } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import {Constants} from 'expo';
import moment from 'moment';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCjElFvJeU2q9NQH3fbK-J8_NCKF5jCCi0',
    authDomain: 'authenticationtest-4a489.firebaseapp.com',
    databaseURL: 'https://authenticationtest-4a489.firebaseio.com',
    projectId: 'authenticationtest-4a489',
    storageBucket: 'authenticationtest-4a489.appspot.com',
  }
  firebase.initializeApp(firebaseConfig)

export class CreateTask extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        // card:[
        startTime: '',
        // endTime = '',
        // task = '',
        // body = ''
        // ],
        cards: []
    }
    this.addItem = this.addItem.bind(this);
}
    componentDidMount() {
        firebase
          .database()       
          .ref()
          .child("tasks")
          .once("value", snapshot => {
            const data = snapshot.val()
            if (snapshot.val()) {
              const initCards = [];
              Object
                .keys(data)
                .forEach(startTime => initCards.push(data[startTime]));
              this.setState({
                cards: initCards
              })
            }
          });
    
        firebase
          .database()
          .ref()
          .child("tasks")
          .on("child_added", snapshot => {
            const data = snapshot.val();
            if (data) {
              this.setState(prevState => ({
                cards: [data, ...prevState.cards]
              }))
            }
          })
    
      }
    
      addItem() {
        if (!this.state.startTime) return;
    
        const newCard = firebase.database().ref()
          .child("tasks")
          .push();
        newCard.set(this.state.startTime, () => this.setState({ startTime: '' }))
      }



    submit = () => {
        const timeFormat = moment.unix(this.state.startTime).format('HH:mm');
        const endTimeFormat = moment.unix(this.state.endTime).format('HH:mm');
        // console.log(` \n Start Time: ${timeFormat} \n End Time: ${endTimeFormat} \n Task Title: ${this.state.task} \n Body: ${this.state.body}`);
        this.setState({ startTime: '', endTime: '', task: '', body: '' });
        alert('Task added');
    }
    // introTime = event => {
    //     const time = moment(event, 'HH:mm').format('X');
    //     this.setState({ startTime: time });
    // };

    endTime = event => {
        const time = moment(event, 'HH:mm').format('X');
        this.setState({ endTime: time });
    };

    changeBody = event => {
        this.setState({ body: event });
    };

    changeTask = event => {
        this.setState({ task: event });
    };

    render() {
        return (
            <ScrollView>
                <View>
                    <FormLabel>Start Time (Military time - HH:mm)</FormLabel>
                    <FormInput onChangeText={(text) => this.setState({startTime: text})}/>
                </View>
                {/* <View>
                    <FormLabel>End Time (Military time - HH:mm)</FormLabel>
                    <FormInput onChangeText={this.endTime}></FormInput>
                </View>
                <View>
                    <FormLabel>Task Title</FormLabel>
                    <FormInput value={this.state.task} onChangeText={this.changeTask}></FormInput>
                </View> */}
                <View>
                    <FormLabel>Body</FormLabel>
                    <FormInput value={this.state.body} onChangeText={this.changeBody}></FormInput>
                    <Button title="Submit" onPress={this.submit} />
                </View>
            </ScrollView>
        );
    }
}

export default CreateTask;