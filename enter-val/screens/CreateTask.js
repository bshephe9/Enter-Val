import React from 'react';
import { ScrollView, View, Button } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import firebase from 'firebase';

class CreateTask extends React.Component {
    state = {
        startTime: '',
        endTime: '',
        task: '',
        body: ''
    }

    submit = () => {
        const startTime = this.state.startTime;
        const endTime = this.state.endTime;
        const task = this.state.task;
        const body = this.state.body;
        const newTask = {
            startTime: startTime,
            endTime: endTime,
            task: task,
            body: body
        }
        firebase.database().ref().push(newTask); //pushing to the database
        //Emptying the form 
        this.setState({   
        startTime: '',
        endTime: '',
        task: '',
        body: '' });
    }
    introTime = event => {
        this.setState({ startTime: event });
    };



    endTime = event => {
        this.setState({ endTime: event });
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
                    <FormLabel>Start Time</FormLabel>
                    <FormInput onChangeText={this.introTime}></FormInput>
                </View>
                <View>
                    <FormLabel>End Time</FormLabel>
                    <FormInput onChangeText={this.endTime}></FormInput>
                </View>
                <View>
                    <FormLabel>Task Title</FormLabel>
                    <FormInput value={this.state.task} onChangeText={this.changeTask}></FormInput>
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

export default CreateTask;