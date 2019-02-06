import React from 'react';
import {
    Text,
    View
} from 'react-native';
import {
    Card
} from 'react-native-elements';

const CardComp = (props) => {
    return (
        <Card key={props.id} title='Example'>
            <View
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    marginBottom: 20,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text>{props.startTime} - {props.endTime}</Text>
                <Text>{props.task}</Text>
                <Text>{props.body}</Text>
            </View>
        </Card>
    )
}


export default CardComp;
