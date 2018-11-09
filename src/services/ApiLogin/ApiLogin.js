import React, {Component} from 'react';

import {View, TextInput, Button, Alert, StyleSheet, Text} from "react-native";

export default class ApiLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    };


    async login() { // fonction asynchrone pour faire appel à l'API
        try {
            let reponseApi = await fetch('https://campus-auth.herokuapp.com/api/users/login', // je stocke dans ma variable le résultat de l'appel à l'Api
                {
                    // la méthode POST prend des params
                    method: 'POST',
                    body: JSON.stringify({
                        username: this.state.username, // le username a pour valeur ce qui est modifié par le State via le formulaire
                        password: this.state.password, // le password a pour valeur ce qui est modifié par le State via le formulaire
                    })

                });
            let reponseRecuperee = await reponseApi.json();

            if (reponseRecuperee.success === true) {
                //Alert.alert("User exists !");
                this.props.navigation.navigate('TimeoutView');
            } else {
                Alert.alert("User doesn't exist :/ ");
                // rester ici si erreur
            }
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <View style={styles.bigBox}>
                <Text style={styles.title}>Page de Login</Text>
                <View>
                    <TextInput
                        value={this.state.username}
                        onChangeText={(username) => this.setState({username})}
                        placeholder={'Username'}
                        style={styles.input}
                    />
                    <TextInput
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        style={styles.input}
                    />

                    <Button
                        title={'Se connecter'}
                        color={'#76d689'}
                        onPress={this.login.bind(this)}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    bigBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

