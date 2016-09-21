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
		paddingBottom: 12,
		fontSize: 36,
		color: '#fff',
	},
	weatherIcon: {
		paddingTop: 6,
		paddingBottom: 12
	},
	weatherForecast: {
		paddingBottom: 10,
		color: '#fff',
	},
	weatherMoonPhase: {
		color: '#fff',
	},
	clockContainer: {
		flex: 1,
		padding: 20,
	},
	time: {
		paddingBottom: 6,
		fontSize: 36,
		textAlign: 'right',
		color: '#fff'
	},
	pm: {
		fontSize: 12,
		textAlign: 'right',
		color: '#fff'
	},
	day: {
		fontSize: 14,
		textAlign: 'right',
		color: '#fff'
	},
	date: {
		fontSize: 14,
		textAlign: 'right',
		color: '#fff'
	}
});

module.exports = styles;
