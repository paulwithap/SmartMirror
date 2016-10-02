/* @flow */
import { AsyncStorage } from 'react-native';

export function* set(key: string, data: Object): Object {
	try {
		await AsyncStorage.setItem(`@SmartMirrorStore:${key}`, JSON.stringify(data));
		return true;
	} catch (error: Object) {
		return error;
	}
}

export function* get(key: string): Object {
	try {
		const data: Object = await AsyncStorage.getItem(`@SmartMirrorStore:${key}`);
		return JSON.parse(data);
	} catch (error) {
		return error;
	}
}
