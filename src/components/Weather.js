import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Config from 'react-native-config';
import styles from '../styles';

class Weather extends Component {
	constructor() {
		super();

		this.forecastApiKey = Config.FORECAST_API_KEY;
		this.latitude = '33.9996905';
		this.longitude = '-118.4704324';
		this.state = {
			temp: '',
			currIcon: '',
			forecast: '',
			moonPhase: ''
		};

		this.getMoonPhaseStr = this.getMoonPhaseStr.bind(this);
	}

	getMoonPhaseStr(dec) {
		if (dec === 0) {
			return 'New Moon';
		}
		if (dec === 0.25) {
			return 'First Quarter Moon';
		}
		if (dec === 0.5) {
			return 'Full Moon';
		}
		if (dec === 0.75) {
			return 'Last Quarter Moon';
		}
		if (dec > 0 && dec < 0.25) {
			return 'Waxing Crescent Moon';
		}
		if (dec > 0.25 && dec < 0.5) {
			return 'Waxing Gibbous Moon';
		}
		if (dec > 0.5 && dec < 0.75) {
			return 'Waning Gibbous Moon';
		}
		if (dec > 0.75) {
			return 'Waning Crescent Moon';
		}
	}

	componentDidMount() {
		fetch(`https://api.forecast.io/forecast/${this.forecastApiKey}/${this.latitude},${this.longitude}`)
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					temp: json.currently.temperature,
					currIcon: json.minutely.icon,
					forecast: json.hourly.summary,
					moonPhase: this.getMoonPhaseStr(json.daily.data[0].moonPhase)
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<View style={styles.weatherContainer}>
				<Text>Weather</Text>
			</View>
		);
	}
}

module.exports = Weather;
