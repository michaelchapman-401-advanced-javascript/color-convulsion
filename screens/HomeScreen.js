import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

import { LocationContext } from './context/locationsContext';

export default class HomeScreen extends Component {
  constructor() {

    super();
    this.state = { ColorHolder: '#00BCD4' }
  }

  ChangeColorFunction = () => {

    var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    this.setState({
      ColorHolder: ColorCode
    })
  }

  render() {
    return (
      <LocationContext.Consumer>
        {state => {
          return (
            <View style={[styles.container, { backgroundColor: this.state.ColorHolder }]}>
              <TouchableOpacity onPress={() => { state.findCurrentLocation(); this.ChangeColorFunction() }} >
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
    // backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
});


