import React from 'react';
import {
View, 
StyleSheet, 
} from 'react-native';


export default class LoginScreen extends React.Component {
    render() {
        return (

            <View style={styles.container}>
                <Text>Simple Login will Go Here</Text>
            </View>
        )
    }
}; 

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#fff', 
        alignContent: 'center'
    }
});