
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import { LocationContext } from './context/locationsContext';

export default class HomeScreen extends Component {
  render() {
    return (
      <LocationContext.Consumer>
        {state => {
          return (
            <View>
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

