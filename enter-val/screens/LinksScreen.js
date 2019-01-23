import React from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Form } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
import { FormLabel, FormInput, FormValidationMessage, Input } from 'react-native-elements'



export default class LinksScreen extends React.Component {

  state = {
    name: ""
  }
  static navigationOptions = {
    title: 'Links',
  };


  submit = event => {
    event.preventDefault();
    console.log(`The title of the note is: ${this.state.name}`);
    this.setState({ name: "" });
  }

  change = event => {
    console.log(event);
    this.setState({name: event})
  };

  render() {
    return (
      <ScrollView>
        <FormLabel>Title</FormLabel>
        <FormInput value={this.state.name} onChangeText={this.change}></FormInput>
        {/* <Input value={this.state.name} onChangeText={name => this.updateValue({name})}/> */}
        <FormValidationMessage>{'Field required'}</FormValidationMessage>
        <Button title="Submit" onPress={this.submit} />
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
