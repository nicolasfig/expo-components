import React, { Component } from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default class Camera extends Component {
    render() {
        return (
            <View>
                <Text>Hello Camera</Text>
                <Image source={require('./assets/whale.jpeg')} style={styles.image}/>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight
    },
    image: {
        Width: 300,
        Height: 400,
    }
}
