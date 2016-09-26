import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	weatherContainer: {
		flex: 1,
		padding: 20,
	},
	weatherTopRow: {
		flexDirection: 'row',
	},
	weatherTemp: {
		fontSize: 40,
		fontWeight: "200",
		color: '#fff',
	},
	weatherIcon: {
		paddingTop: 6,
	},
	weatherForecast: {
		paddingBottom: 10,
		fontSize: 20,
		fontWeight: "200",
		color: '#fff',
	},
	weatherMoonPhase: {
		color: '#fff',
		fontWeight: "200"
	},
	clockContainer: {
		flex: 1,
		padding: 20,
	},
	time: {
		fontSize: 40,
		fontWeight: "200",
		textAlign: 'right',
		color: '#fff'
	},
	pm: {
		fontSize: 12,
		textAlign: 'right',
		color: '#fff'
	},
	day: {
		paddingBottom: 2,
		fontSize: 20,
		fontWeight: "200",
		textAlign: 'right',
		color: '#fff'
	},
	date: {
		fontSize: 20,
		fontWeight: "200",
		textAlign: 'right',
		color: '#fff'
	},
	calendarEvents: {
		flex: 0.5,
		padding: 20
	},
	calendarEventsList: {

	},
	calendarEventListItem: {
		padding: 6,
		color: '#fff',
		fontSize: 18,
		fontWeight: "200"
	},
	worldNews: {
		flex: 1.5,
		padding: 20
	},
	worldNewsList: {

	},
	worldNewsListItem: {
		padding: 8,
		color: '#fff',
		fontSize: 14,
		fontWeight: '200'
	}
});

module.exports = styles;
