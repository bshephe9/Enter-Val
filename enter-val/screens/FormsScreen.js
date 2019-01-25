import React from 'react';
import {
View, 
StyleSheet, 
Text
} from 'react-native';


export default class LoginScreen extends React.Component {
    render() {
        return (

            <View style={styles.container}>
                <Text styles={styles.text}>Simple Login will Go Here</Text>
            </View>
        )
    }
}; 

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#fff', 
        alignContent: 'center',
    }, 
    text: { 
        fontWeight: 'bold', 
        fontSize: 35,
        alignItems: 'center',
    }
});