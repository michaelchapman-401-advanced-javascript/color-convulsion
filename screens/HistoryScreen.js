import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

import { LocationContext } from './context/locationsContext';
import { white } from 'ansi-colors';

export default class HistoryScreen extends Component {
  render() {
    return (
      <View style={styles.container2}>
        <ScrollView style={styles.scroll}>
          <LocationContext.Consumer>
            {state => {
              return (
                <View style={styles.container}>
                  {state.history.map(loc => (
                    <View style={styles.position}>
                      <Text style={styles.color}>Location</Text>
                      <Text> </Text>
                      <Text style={styles.color}>lat: {loc[0]}</Text>
                      <Text> </Text>
                      <Text style={styles.color}>lng: {loc[1]}</Text>
                    </View>
                  ))}
                </View>
              );
            }}
          </LocationContext.Consumer>
        </ScrollView>
      </View>
    );
  }
}


function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    alignItems: 'center',
    // marginTop: 25,

    // justifyContent: 'center'
  },
  color: {
    color: 'white'
  },
  position: {
    marginTop: 25,
  },
  scroll: {
    height: 600
  },
  container2: {
    height: 700,
    backgroundColor: 'darkblue'
  }
});

