import React from 'react';
import {
    ScrollView,
    Text,
    View,
    StyleSheet
} from 'react-native';
import {
    Card
} from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


class CardComp extends React.Component {
    render() {
        return (
            <View>
                <Card title='8:00 - 11:00 AM'>
                    <View
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            marginBottom: 20,
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text>
                            Insert
                        </Text>
                    </View>
                </Card>
            </View>
        )
    }
}

export default CardComp;
