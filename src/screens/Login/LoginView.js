import React, {Component} from "react";
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from "react-native";

export default class LoginView extends Component {

    render() {
        return (
            <View style={styles.bigBox}>
                <Text style={styles.title}>
                    Page de login :
                </Text>
                <View style={styles.form}>
                    <TextInput
                        style={styles.inputText}
                        //onChangeText={(email) => this.setState({email})}
                        underlineColorAndroid='transparent'
                        placeholder="E-mail"
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.inputText}
                        //onChangeText={(Password) => this.setState({Password})}
                        underlineColorAndroid='transparent'
                        placeholder="Mot de passe"
                    />

                    <TouchableOpacity
                                      onPress={this.props.onLoginPress}>
                        <Text style={styles.buttonLogin}>Se connecter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
    },
    bigBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    form: {
        flex: 1,
        flexDirection: 'column'
    },
    buttonLogin: {
        backgroundColor: '#0FDDD6',
        margin: 5,
        height: 40,
        borderColor: '#525b62',
        borderWidth: 1,
        borderRadius: 2,
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        paddingTop: 5

    },
    inputText: {
        margin: 5,
        height: 40,
        borderColor: '#525b62',
        borderWidth: 1,
        borderRadius: 2,
        textAlign: 'center'
    }
});