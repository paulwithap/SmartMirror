import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';

class Weather extends Component {
	constructor() {
		super();

		this.forecastApiKey = Config.FORECAST_API_KEY;
		this.latitude = '33.9996905';
		this.longitude = '-118.4704324';
		this.state = {
			temp: '',
			currIcon: 'ios-sunny',
			forecast: '',
			moonPhase: ''
		};

		this.getMoonPhaseStr = this.getMoonPhaseStr.bind(this);
		this.getWeatherIcon = this.getWeatherIcon.bind(this);
	}

	getWeatherIcon(icon) {
		switch (icon) {
			case 'clear-day':
				return 'ios-sunny';
			case 'clear-night':
				return 'ios-moon';
			case 'rain':
				return 'ios-rainy';
			case 'snow':
				return 'ios-snow';
			case 'sleet':
				return 'ios-rainy';
			case 'wind':
				return 'ios-fastforward'
			case 'fog':
				return 'ios-cloudy';
			case 'cloudy':
				return 'ios-cloudy';
			case 'partly-cloudy-day':
				return 'ios-partly-sunny';
			case 'partly-cloudy-night':
				return 'ios-cloudy-night';
			default:
				return 'ios-sunny';
		}
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
					temp: Math.round(json.currently.temperature),
					currIcon: this.getWeatherIcon(json.minutely.icon),
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
				<View style={styles.weatherTopRow}>
					<Text style={styles.weatherTemp}>{this.state.temp}°{' '}</Text>
					<Text style={styles.weatherIcon}><Icon name={this.state.currIcon} size={38} color="#fff"/></Text>
				</View>
				<Text style={styles.weatherForecast}>{this.state.forecast}</Text>
				<Text style={styles.weatherMoonPhase}>{this.state.moonPhase}</Text>
			</View>
		);
	}
}

module.exports = Weather;
