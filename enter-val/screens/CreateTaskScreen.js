import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
import { FormLabel, FormInput } from 'react-native-elements'
import Button from 'react-native-button';
import moment from 'moment'



class LinksScreen extends React.Component {

  state = {
    startTime: "",
    endTime: "",
    task: "",
    body: ""
  }
  static navigationOptions = {
    title: 'Links',
  };


  submit = event => {
    event.preventDefault();
    const timeFormat = moment.unix(this.state.startTime).format("HH:mm");
    const endTimeFormat = moment.unix(this.state.endTime).format("HH:mm");
    console.log(`Start Time: ${timeFormat} \n 
    End Time: ${endTimeFormat} \n
    Body is: ${this.state.body}`);
    this.setState({ startTime: "", body: "" });
    alert("Task added!")
  }

  introTime = event => {
    const time = moment(event, "HH:mm").format("X");
    this.setState({ startTime: time });
  };

  endTime = event => {
    const time = moment(event, "HH:mm").format("X");
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
          <FormInput onChangeText={this.introTime}></FormInput>
        </View>
        <View>
          <FormLabel>End Time (Military time - HH:mm)</FormLabel>
          <FormInput onChangeText={this.endTime}></FormInput>
        </View>
        <View>
          <FormLabel>Task Title</FormLabel>
          <FormInput value={this.state.task} onChangeText={this.changeTask}></FormInput>
        </View>
        <View>
          <FormLabel>Body</FormLabel>
          <FormInput value={this.state.body} onChangeText={this.changeBody}></FormInput>
          <Button
            style={{ fontSize: 20, color: '#fff', marginTop: 80, borderColor: '#fa8072', backgroundColor: '#fa8072', padding: 4, paddingLeft: 20, paddingRight: 20, borderRadius: 5, overflow: 'hidden' }}
            styleDisabled={{ color: 'red' }}>
            submit
            </Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default LinksScreen;
