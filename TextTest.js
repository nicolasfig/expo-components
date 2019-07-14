import React, {Component} from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import * as Permissions from "expo-permissions";
import * as Contacts from 'expo-contacts';
import Constants from 'expo-constants';

export default class TextTest extends Component{

    state = {
        contact: null,
    }

    _getRandomContactAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.CONTACTS);
        if(status !== 'granted'){
            console.error("Not granted");
            return;
        }

        let contacts = await Contacts.getContactsAsync({
            pageSize: 1,
            pageOffset: 0,
            fields: [Contacts.Fields.PhoneNumbers]
        });

        let {total} = contacts; 

        let n = Math.floor(Math.random() * total);

        let randomContact = await Contacts.getContactsAsync({
            pageSize: 1, 
            pageOffset: n,
            fields: [Contacts.Fields.PhoneNumbers]
        })
        this.setState({
            contact: randomContact
        })
    }
    
    render(){
        console.log(this.state.contact)
        return (
            <View style={styles.container}>
                <Button title="Pick a random contact" onPress={() => this._getRandomContactAsync()} />
                {this.state.contact && (<Text>{this.state.contact.firstName}</Text>) || null}
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