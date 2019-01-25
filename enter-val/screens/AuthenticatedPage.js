import React, { Component } from 'react';
import { Title, Button, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class App extends Component {


    render() {
        return (
            <View style={StyleSheet.container}>
            <Title
            title={'You have successfully Logged In'}
            style={styles.title}
            />
            <Button
            title={'Hello'}
            style={styles.input}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
    }
});