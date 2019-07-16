import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import Constants from "expo-constants";
import { Video } from "expo-av";
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { AppLoading } from "expo";

let green = "#477009";
let yellow = "#fcd602";

export default class Cats extends Component {
	state = {
		isReady: false
	};
	componentDidMount() {
		this.setUpAsync();
	}

	playAsync = async () => {
		await this._video.replayAsync();
    };
    
    _loadAssets = async () => {
        Asset.loadAsync([
            require('./assets/1.mp4'),
            require('./assets/2.mp4'),
            require('./assets/3.mp4'),
            require('./assets/4.mp4'),
            require('./assets/5.mp4'),
            require('./assets/6.mp4'),
            require('./assets/7.mp4'),
            require('./assets/8.mp4'),
            require('./assets/9.mp4'),
        ])
    }
    
    setUpAsync = async () => {
        await this._loadAssets();
        await this._loadFontAsync();
        await this.setState({
			isReady: true
		});
    }

	_loadFontAsync = async () => {
        await Font.loadAsync({
            CooperBlackRegular: require("./assets/CooperBlackRegular.ttf")
        });
	};

	render() {
		if (!this.state.isReady) {
			return <AppLoading />;
		}
		return (
			<View style={styles.container}>
				<Text
					style={{
						color: yellow,
						fontSize: 34,
						fontFamily: "CooperBlackRegular",
					}}
				>
					Cat Sounds
				</Text>
				<TouchableHighlight
					onPress={() => {
						this.playAsync();
					}}
				>
					<View style={styles.videoContainer}>
						<Video
							source={require("./assets/1.mp4")}
							rate={1.0}
							volume={1.0}
							isMuted={false}
							resizeMode="cover"
							shouldPlay={false}
							isLooping={false}
							style={{ width: 200, height: 200 }}
							ref={c => {
								this._video = c;
							}}
						/>
                        <Video
							source={require("./assets/2.mp4")}
							rate={1.0}
							volume={1.0}
							isMuted={false}
							resizeMode="cover"
							shouldPlay={false}
							isLooping={false}
							style={{ width: 200, height: 200 }}
							ref={c => {
								this._video = c;
							}}
						/>
                        <Video
							source={require("./assets/3.mp4")}
							rate={1.0}
							volume={1.0}
							isMuted={false}
							resizeMode="cover"
							shouldPlay={false}
							isLooping={false}
							style={{ width: 200, height: 200 }}
							ref={c => {
								this._video = c;
							}}
						/>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: green,
		alignItems: "center",
		justifyContent: "center",
        paddingTop: Constants.statusBarHeight,
    }, 
    videoContainer: {
        flexDirection: 'row'
    }
});
