import React from 'react';
import { ScrollView, View, Button } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import moment from 'moment';

class CreateTask extends React.Component {
    state = {
        startTime: '',
        endTime: '',
        task: '',
        body: ''
    }

    submit = () => {
        const timeFormat = moment.unix(this.state.startTime).format('HH:mm');
        const endTimeFormat = moment.unix(this.state.endTime).format('HH:mm');
        console.log(` \n Start Time: ${timeFormat} \n End Time: ${endTimeFormat} \n Task Title: ${this.state.task} \n Body: ${this.state.body}`);
        this.setState({ startTime: '', endTime: '', task: '', body: '' });
        alert('Task added');
    }
    introTime = event => {
        const time = moment(event, 'HH:mm').format('X');
        this.setState({ startTime: time });
    };

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
                    <Button title="Submit" onPress={this.submit} />
                </View>
            </ScrollView>
        );
    }
}

export default CreateTask;