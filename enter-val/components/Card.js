import React from 'react';
import {
    Text,
    View
} from 'react-native';
import {
    Card
} from 'react-native-elements';

const CardComp = ({ tasks }) => {
    return (
        <View>
            {/* Tasks first is onlt for when we have projects */}
            {tasks && tasks.map(task => {
                return (
                    <Card key={task.id} title='11:00-12:00'>
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
                            <Text>{task.startTime} - {task.endTime}</Text>
                            <Text>{task.task}</Text>
                            <Text>{task.body}</Text>
                        </View>
                    </Card>
                )
            })}
        </View>
    )
}


export default CardComp;
