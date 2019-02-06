import React from 'react';
import { ScrollView, View, Button } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { createTaskAct } from '../redux/store/actions/taskActions'
import { connect } from 'react-redux';

class CreateTask extends React.Component {
    state = {
        startTime: '',
        endTime: '',
        task: '',
        body: ''
    }

    submit = () => {
        this.props.createTaskAct(this.state)
        // this.setState({ startTime: '', endTime: '', task: '', body: '' });
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

const mapDispatchToProps = (dispatch) => {
    return {
        createTaskAct: (task) => dispatch(createTaskAct(task))
    }
}

// The first parameter has to be the stateProps that's why the first parameter in this case is null
export default connect(null, mapDispatchToProps)(CreateTask);