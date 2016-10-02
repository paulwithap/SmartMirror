import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, TouchableHighlight } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import { getItem, setItem } from '../utils/storage';
import Dashboard from './Dashboard';
import styles from '../styles';

class Settings extends Component {
	mixins: [TimerMixin]

	constructor(props) {
		super(props);

		this.state = {
			settings: {
				zipcode: '90291',
				subreddit: 'news+worldnews+politics'
			},
			saveBtnTxt: 'Save Settings'
		};

		this.backToDashboard = this.backToDashboard.bind(this);
		this.updateSettings = this.updateSettings.bind(this);
	}

	componentDidMount() {
		getItem('settings')
			.then((settings) => {
				if (settings !== null) {
					console.log('settings');
					console.log(settings);
					this.setState({
						settings: {
							zipcode: settings.zipcode,
							subreddit: settings.subreddit,
						}
					});
				}
			});
	}

	updateSettings() {
		this.setState({
			saveBtnTxt: 'Saving...'
		});
		const settings = {
			...this.state.settings
		};

		console.log('updateSettings');
		console.log(settings);

		setItem('settings', settings);
		setTimeout(() => {
			this.setState({
				saveBtnTxt: 'Save Settings'
			});
		}, 500);
	}

	backToDashboard() {
		this.props.navigator.push({
			component: Dashboard,
			title: 'Dashboard',
			passProps: { subreddit: this.state.settings.subreddit }
		});
	}

	render() {
		return (
			<ScrollView style={styles.settingsContainer}>
				{/* <View style={styles.settingsInputContainer}>
					<Text>Zipcode for Weather Forecast</Text>
					<TextInput
						style={styles.settingsInput}
						onChangeText={(text) => {
							this.setState({ settings: { ...this.state.settings, zipcode: text } });
						}}
						value={this.state.settings.zipcode}
					/>
				</View> */}
				<View style={styles.settingsInputContainer}>
					<Text style={styles.settingsInputLabel}>Subreddit for News Headlines</Text>
					<TextInput
						style={styles.settingsInput}
						autoCapitalize="none"
						onChangeText={(text) => {
							console.log('text');
							console.log(text);
							this.setState({ settings: { ...this.state.settings, subreddit: text } });
						}}
						value={this.state.settings.subreddit}
					/>
				</View>
				<TouchableHighlight
					style={styles.settingsSubmitBtn}
					underlayColor="#00db8e"
					onPress={this.updateSettings}
				>
					<Text style={styles.settingsSubmitText}>{this.state.saveBtnTxt}</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.settingsBackBtn}
					underlayColor="#000000"
					onPress={this.backToDashboard}
				>
					<Text style={styles.settingsBackText}>Back to Dashboard</Text>
				</TouchableHighlight>
			</ScrollView>
		);
	}
}

module.exports = Settings;
