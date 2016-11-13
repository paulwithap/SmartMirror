import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
    flex: 1,
		flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000000'
  },
	weatherClock: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	weatherContainer: {
		flex: 1,
		padding: 20,
	},
	weatherTopRow: {
		flexDirection: 'row',
	},
	weatherTemp: {
		fontSize: 80,
		fontWeight: "200",
		color: '#fff',
	},
	weatherIcon: {
		paddingTop: 6,
	},
	weatherForecast: {
		paddingBottom: 10,
		fontSize: 40,
		fontWeight: "200",
		color: '#fff',
	},
	weatherMoonPhase: {
		color: '#fff',
		fontSize: 24,
		fontWeight: "200"
	},
	clockContainer: {
		flex: 1,
		padding: 20,
	},
	time: {
		fontSize: 80,
		fontWeight: "200",
		textAlign: 'right',
		color: '#fff'
	},
	pm: {
		fontSize: 24,
		textAlign: 'right',
		color: '#fff'
	},
	day: {
		paddingBottom: 2,
		fontSize: 40,
		fontWeight: "200",
		textAlign: 'right',
		color: '#fff'
	},
	date: {
		fontSize: 40,
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
		fontSize: 36,
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
		fontSize: 28,
		fontWeight: '200'
	},
	settingsContainer: {
		flex: 1,
		paddingTop: 80,
		backgroundColor: '#000'
	},
	settingsInputContainer: {
		borderBottomWidth: 1,
		borderBottomColor: '#999',
		margin: 10,
		marginBottom: 40
	},
	settingsInput: {
		height: 50,
		color: '#fff',
		fontSize: 24
	},
	settingsInputLabel: {
		fontSize: 32,
		fontWeight: '400',
		color: '#fff',
		paddingBottom: 12
	},
	settingsSubmitBtn: {
		backgroundColor: '#00c27e',
		flexDirection: 'row',
		alignSelf: 'stretch',
		justifyContent: 'center',
		height: 80
	},
	settingsSubmitText: {
		fontSize: 32,
		color: 'white',
		alignSelf: 'center'
	},
	settingsBackBtn: {
		backgroundColor: '#333',
		flexDirection: 'row',
		alignSelf: 'stretch',
		justifyContent: 'center',
		height: 80
	},
	settingsBackText: {
		fontSize: 32,
		color: 'white',
		alignSelf: 'center'
	}
});

module.exports = styles;
