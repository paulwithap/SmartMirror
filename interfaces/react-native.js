declare module 'react-native'{
	declare type AsyncStoragePromise<T> = Promise<Object>;
	declare class AsyncStorage {
		setItem(key: string, value: string, callback?(error: ?Error) => void): AsyncStoragePromise<T>;
		getItem(key: string, callback?(error: ?Error, result: ?string) => void): AsyncStoragePromise<T>;
	}

	declare var exports: {
		AsyncStorage
	}
}
