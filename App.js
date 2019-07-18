import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import Camera from './Camera';
import Cats from './Cats';
import Maps from './Maps';
import TextTest from './TextTest';
import Motion from './Motion';

export default class App extends Component {

	render() {
		return <Camera/>
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

// TODO: Fix marker errors
// TODO: Test more components