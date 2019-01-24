import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

export default class UserScreen extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>
            Card Title
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  card: {
    backgroundColor: 'transparent',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    height: 150,
    shadowColor: '#000',
    shadowRadius: 1,
    alignItems: 'center',
  },
  cardText: {
    padding: 10,  
    fontSize: 20,
    fontWeight: 'bold',
  }
});
