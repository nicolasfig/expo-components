import React, {Component} from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default class App extends Component{
	
	state = {
		location: null,
	}

	componentDidMount(){
		this._getLocationAsync();
	}

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== "granted") {
			console.error("Location permission not granted!");
			return;
		}
		let location = await Location.getCurrentPositionAsync({});
		let utica = (await Location.geocodeAsync("calle 170"))[0];
		console.log(utica);
		this.setState({location});
	};
	render(){
		if(!this.state.location){
			return (<View/>)
		}
		return (
			<MapView
				style={{ flex: 1 }}
				initialRegion={{
					latitude: this.state.location.coords.latitude,
					longitude: this.state.location.coords.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
			>
			<Marker 
				coordinate={this.state.location.coords}
				title="Buena la rata"
			/>
			</MapView>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight
	}
});
