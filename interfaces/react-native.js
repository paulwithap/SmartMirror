declare module 'react-native'{
	declare class AsyncStorage {
		setItem(key: string, value: string, callback?: ?(error: ?Error) => void): Promise<Object>;
		getItem(key: string, callback?: ?(error: ?Error, result: ?string) => void): Promise<Object>;
	}
}
