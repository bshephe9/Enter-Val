import React from 'react';
import { ScrollView, View, Button } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

class CreateTask extends React.Component {
    state = {
        startTime: '',
        endTime: '',
        task: '',
        body: ''
    }

    submit = () => {
        console.log('Console of the state: ', this.state)
        this.setState({ startTime: '', endTime: '', task: '', body: '' });
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