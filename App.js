import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import Maps from './Maps';
import TextTest from './TextTest';

export default class App extends Component {

	

	render() {
		return <TextTest/>
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