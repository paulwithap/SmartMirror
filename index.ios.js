/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Weather from './src/components/Weather';
import Clock from './src/components/Clock';
import CalendarEvents from './src/components/CalendarEvents';

class SmartMirror extends Component {
  render() {
    return (
      <View style={styles.container}>
				<View style={styles.weatherClock}>
					<Weather />
					<Clock />
				</View>
				<CalendarEvents />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
	weatherClock: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SmartMirror', () => SmartMirror);
