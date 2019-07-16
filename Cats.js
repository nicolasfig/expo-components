import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import Constants from "expo-constants";
import { Video } from "expo-av";
import { Apploading, Font, AppLoading } from "expo";

let green = "#477009";
let yellow = "#fcd602";

export default class Cats extends Component {

    state = {
        isReady: false,
    }
    componentDidMount(){
        this._loadFontAsync();
    }

	playAsync = async () => {
		await this._video.replayAsync();
	};

	_loadFontAsync = async () => {
		await Font.loadAsync({
			CooperBlackRegular: require("./assets/CooperBlackRegular.ttf")
        });
        this.setState({
            isReady: true
        })
	};

	render() {
        if(!this.state.isReady){
            return <AppLoading/>
        }
		return (
			<View style={styles.container}>
				<Text style={{ color: yellow, fontSize: 34 }}>Cat Sounds</Text>
				<TouchableHighlight
					onPress={() => {
						this.playAsync();
					}}
				>
					<View>
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
		paddingTop: Constants.statusBarHeight
	}
});
