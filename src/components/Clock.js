import React, { Component, PropTypes as T } from 'react';
import { View, Text } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import styles from '../styles';

class Clock extends Component {
	mixins: [TimerMixin]

	constructor() {
		super();

		this.timeString = '';
		this.dateString = '';
		this.getTime = this.getTime.bind(this);
		this.getDate = this.getDate.bind(this);
		this.state = {
			time: '',
			day: '',
			date: ''
		};
	}

	getTime() {
		const today = new Date();
		const h = today.getHours();
		let m = today.getMinutes();
		m = (m < 10) ? `0${m}` : m;

		this.setState({
			time: `${h}:${m}`
		});

		const t = setTimeout(this.getTime, 500);
	}

	getDayString(dayNum) {
		const days = {
			0: 'Sunday',
			1: 'Monday',
			2: 'Tuesday',
			3: 'Wednesday',
			4: 'Thursday',
			5: 'Friday',
			6: 'Saturday'
		};

		return days[dayNum];
	}

	getMonthString(monthNum) {
		const months = {
			0: 'January',
			1: 'February',
			2: 'March',
			3: 'April',
			4: 'May',
			5: 'June',
			6: 'July',
			7: 'August',
			8: 'September',
			9: 'October',
			10: 'November',
			11: 'December'
		};

		return months[monthNum];
	}

	getDate() {
		const today = new Date();
		const day = this.getDayString(today.getDay());
		const month = this.getMonthString(today.getMonth());
		const date = today.getDate();

		this.setState({
			day: `${day}`,
			date: `${month} ${date}`
		});
	}

	componentDidMount() {
		this.getTime();
		this.getDate();
	}

	render() {
		return(
			<View style={styles.clockContainer}>
				<Text style={styles.time}>{this.state.time}</Text>
				<Text style={styles.day}>{this.state.day}</Text>
				<Text style={styles.date}>{this.state.date}</Text>
			</View>
		);
	}
}

module.exports = Clock;
