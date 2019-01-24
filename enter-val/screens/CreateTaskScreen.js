import React from 'react';
import { ScrollView, StyleSheet, Text, Button, View } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import moment from 'moment'



class LinksScreen extends React.Component {

  state = {
    task: "",
    body: ""
  }
  static navigationOptions = {
    title: 'Links',
  };


  submit = event => {
    event.preventDefault();
    const timeFormat = moment.unix(this.state.task).format("HH:mm");
    console.log(`The title of the note is: ${timeFormat} \n 
    and the body is: ${this.state.body}`);
    this.setState({ task: "", body: "" });
    alert("Note added!")
  }

  changeName = event => {
    const time = moment(event, "HH:mm").format("X");
    this.setState({ task: time });
  };

  changeBody = event => {
    this.setState({ body: event });
  };

  render() {
    return (
      <ScrollView>
        <View>
          <FormLabel>Task</FormLabel>
          <FormInput onChangeText={this.changeName}></FormInput>
          <FormValidationMessage>{'Field required'}</FormValidationMessage>
        </View>

        <View>
          <FormLabel>Body</FormLabel>
          <FormInput value={this.state.body} onChangeText={this.changeBody}></FormInput>
          <Button title="Submit" onPress={this.submit} />
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
