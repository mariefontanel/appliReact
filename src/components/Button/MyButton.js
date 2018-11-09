import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './ButtonStyle';

export default class MyButton extends Component {
    render() {
        return (
            <View style={styles.button}>
                <TouchableOpacity onPress={() => {
                    this.props.onPressButton()
                }}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}