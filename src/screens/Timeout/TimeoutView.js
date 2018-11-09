import {Text, View, Image, TouchableOpacity} from "react-native";
import React, { Component } from 'react';
import styles from './TimeoutStyle';

export default class TimeoutView extends Component {
    render() {
        return (
            <View style={styles.bigBox}>

                <Text style={styles.title}>
                    Naviguez selon vos envies :-)
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('Counter');
                    }}
                >
                    <Text style={styles.text}>Accès au compteur</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('GeolocView');
                    }}
                >
                    <Text style={styles.text}>Coordonnées GPS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('Users');
                    }}
                >
                    <Text style={styles.text}>API Liste de Users</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('Home');
                    }}
                >
                    <Text style={styles.text}>Se déconnecter</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

