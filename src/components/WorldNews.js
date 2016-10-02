import React, { Component } from 'react';
import { View, ListView, Text, NativeModules } from 'react-native';
import { getItem } from '../utils/storage';
import styles from '../styles';

// const google = require('googleapis');

class WorldNews extends Component {
	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      posts: ds.cloneWithRows([{data: { title: ''}}]),
    };
	}

	componentDidMount() {
		getItem('settings')
			.then((settings) => {
				let subreddit;
				if (settings !== null) {
					subreddit = settings.subreddit || 'news+worldnews+politics';
				} else {
					subreddit = 'news+worldnews+politics';
				}

				fetch(`https://www.reddit.com/r/${subreddit}.json`)
					.then((response) => response.json())
					.then((json) => {
						console.log('reddit json');
						console.log(json);
						this.setState({
							posts: this.state.posts.cloneWithRows(json.data.children.slice(0, 5))
						})
					})
			})
			.catch((error) => console.log(error));
	}

	render() {
		return(
			<View style={styles.worldNews}>
				<ListView
					enableEmptySections
					style={styles.worldNewsList}
					dataSource={this.state.posts}
					renderRow={(rowData) => <Text style={styles.worldNewsListItem}>{rowData.data.title}</Text>}
				/>
			</View>
		);
	}
}

module.exports = WorldNews;
