import React, { Component } from 'react';
import {Button, Image, Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default class Camera extends Component {

    _launchCameraAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if(status !== 'granted'){
            console.error("Camera roll perms not granted");
            return;
        } 

        let image = await ImagePicker.launchImageLibraryAsync();
        console.log(image);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello Camera</Text>
                <View style={styles.imageContainer}>
                    <Image source={require('./assets/whale.jpeg')} style={styles.image}/>
                    <Image source={require('./assets/whale2.jpeg')} style={styles.image}/>
                </View>
                <Button onPress={this._launchCameraAsync} title="Gallery"/>
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
		marginTop: Constants.statusBarHeight
    },
    imageContainer: {
        flexDirection: "row",
    },
    image: {
        width: 200,
        height: 200,
    }
}
