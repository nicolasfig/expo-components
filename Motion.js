import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {DeviceMotion} from 'expo-sensors';

export default class Motion extends Component{

    isAvailable = DeviceMotion.isAvailableAsync();

    render(){
        return(
            <View style={styles.container}>
                <Text>{JSON.stringify(this.isAvailable)}</Text>
            </View> 
        )
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