import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import {
    Card
} from 'react-native-elements';

const CardComp = (props) => {
    return (
        <Card key={props.id} title=''>
            <View
                style={{
                   
                }}>
                <Text
                    style={{
                        justifyContent: 'center',
                        fontWeight:'bold',
                        fontSize: '17'
                    }}>
                    {props.startTime} - {props.endTime}</Text>
                <Text 
                style={{
                    justifyContent: 'center',
                    marginTop: 5,
                    fontSize: '15'
                }}>
                {props.body}</Text>
            </View>
        </Card>
    )
}


export default CardComp;

