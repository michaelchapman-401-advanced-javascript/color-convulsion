import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

import { LocationContext } from './context/locationsContext';

export default class HomeScreen extends Component {
  render() {
    return (
      <LocationContext.Consumer>
        {state => {
          return (
            <View style={styles.container}>
              <TouchableOpacity onPress={state.findCurrentLocation}>
              <Text> Where am I? </Text>
              <Text> {state.latitude} </Text>
              <Text> {state.longitude} </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </LocationContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
});


