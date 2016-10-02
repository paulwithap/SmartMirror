import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Weather from './Weather';
import Clock from './Clock';
import CalendarEvents from './CalendarEvents';
import WorldNews from './WorldNews';
import Settings from './Settings';
import styles from '../styles';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.goToSettings = this.goToSettings.bind(this);
	}

	goToSettings() {
		this.props.navigator.push({
			component: Settings,
			title: 'Settings',
		});
	}

	render() {
    return (
      <View style={styles.container}>
				<View style={styles.weatherClock}>
					<Weather />
					<Clock />
				</View>
				<CalendarEvents />
				<WorldNews />
				<Text style={{flex: 0.1, textAlign: 'right', paddingRight: 10}} onPress={this.goToSettings}>
					<Icon name="ios-cog" size={18} color="#fff"/>
				</Text>
      </View>
    );
  }
}

export default Dashboard;
