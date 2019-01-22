import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'



export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };
  hello(){
    console.log("Hello");
  }
  render() {
    return (
      <ScrollView>
      <FormLabel>Title</FormLabel>
      <FormInput></FormInput>
      <FormValidationMessage>{'Field required'}</FormValidationMessage>
      <Button title="Submit" onPress={this.hello}/>
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
