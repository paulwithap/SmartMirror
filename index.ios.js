/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS
} from 'react-native';
import Dashboard from './src/components/Dashboard';
import styles from './src/styles'

class SmartMirror extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
				initialRoute={{
					component: Dashboard,
					title: 'Dashboard'
				}}
				navigationBarHidden={true}
			/>
    );
  }
}

AppRegistry.registerComponent('SmartMirror', () => SmartMirror);
