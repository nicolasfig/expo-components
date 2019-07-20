import React, { Component } from "react";
import { Button, Image, Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default class Camera extends Component {
	state = {
        chosenImage: null,
        takenImage: null,
	};

	_launchCameraRollAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		if (status !== "granted") {
			console.error("Camera roll perms not granted");
			return;
		}

		let image = await ImagePicker.launchImageLibraryAsync();
		this.setState({
            chosenImage: image
        })
    };
    
    _launchCameraAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.CAMERA);
        if(status !== "granted"){
            console.error("Camera perms not granted");
            return;
        }
        let image = await ImagePicker.launchCameraAsync();
        this.setState({
            takenImage: image
        })
    }

	render() {
		return (
			<View style={styles.container}>
				<Text>Hello Camera</Text>
				<View style={styles.imageContainer}>
					<Image
						source={require("./assets/whale.jpeg")}
						style={styles.image}
					/>
					<Image
						source={require("./assets/whale2.jpeg")}
						style={styles.image}
					/>
				</View>
				<View style={{flexDirection: 'row', marginLeft: 20}}>
				<Button onPress={this._launchCameraRollAsync} title="Gallery" />
                <Button title="Launch Camera" onPress={this._launchCameraAsync}/>
				</View>
				{(this.state.chosenImage && 
					<Image
						source={{ uri: this.state.chosenImage.uri }}
						style={styles.image}
					/>
				)}
				{(this.state.takenImage && 
					<Image
						source={{ uri: this.state.takenImage.uri }}
						style={styles.image}
					/>
				)}
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		marginTop: Constants.statusBarHeight
	},
	imageContainer: {
		flexDirection: "row"
	},
	image: {
		width: 200,
		height: 200
	}
};
