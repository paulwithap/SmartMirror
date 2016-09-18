import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

class Weather extends Component {
	render() {
		return (
			<View style={styles.weatherContainer}>
				<Text>Weather</Text>
			</View>
		);
	}
}

module.exports = Weather;
