const ReactNative = require('react-native');
const { AsyncStorage } = ReactNative;

export const setItem = async (key, data) => {
	try {
		await AsyncStorage.setItem(`@SmartMirrorStore:${key}`, JSON.stringify(data));
		return result;
	} catch (error) {
		return error;
	}
}

export const getItem = async (key) => {
	try {
		const data = await AsyncStorage.getItem(`@SmartMirrorStore:${key}`);
		return JSON.parse(data);
	} catch (error) {
		return error;
	}
}
