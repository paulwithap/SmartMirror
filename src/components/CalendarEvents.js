import React, { Component } from 'react';
import { View, ListView, Text, NativeModules } from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';

// const google = require('googleapis');

class CalendarEvents extends Component {
	constructor() {
		super();

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      events: ds.cloneWithRows(['row 1', 'row 2']),
    };
	}

	componentDidMount() {
		RNCalendarEvents.authorizeEventStore()
			.then((status) => {
				if (status === 'authorized') {
					console.log('status is authorized');
					const today = moment().utc().toISOString();
					const tomorrow = moment(today).endOf('day').add(1, 'd').utc().toISOString();
					RNCalendarEvents.fetchAllEvents(today, tomorrow)
						.then((events) => {
							console.log('events');
							console.log(events);
							this.setState({
								events: this.state.events.cloneWithRows(events)
							});
						});
				}
			})
			.catch((error) => {
				console.log('error');
				console.error(error);
			});
	}

	render() {
		return(
			<View style={styles.calendarEvents}>
				<ListView
					enableEmptySections
					style={styles.calendarEventsList}
					dataSource={this.state.events}
					renderRow={(rowData) => <Text style={styles.calendarEventListItem}><Icon name={'ios-calendar-outline'} size={32} color="#fff"/>{'   '}{rowData.title} at {moment(rowData.occurrenceDate).utcOffset(-420).format('HH:mm dddd')}</Text>}
				/>
			</View>
		);
	}
}

module.exports = CalendarEvents;
