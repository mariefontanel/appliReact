import React from 'react';
import axios from 'axios';
import {View, Text, FlatList, TouchableOpacity} from "react-native";

export default class UserListView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }

    getUsersData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users') // instancie un Object PROMISE
            .then(res => {           // execute la promise
            console.log(res);
            this.setState({ users: res.data });
        })
            .catch( (error) => {    //recupère l'erreur s'il y a
                console.log('Erreur à afficher : ', error.message); // si j'enleve une lettre à l'url j'ai une erreur de Type : Network !
                console.log('config ', error.config);
            });
    }

    componentDidMount() {
        this.getUsersData();
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 17, textAlign: 'center', marginTop: 15, textDecorationLine: 'underline'}}>Listes des utilisateurs</Text>
            <FlatList
                    data={this.state.users}
                    keyExtractor={(item) => item.key}
                    renderItem={
                        ({item}) =>
                            <TouchableOpacity
                                style={{marginTop: '3%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10}}
                                onPress={() => {
                                this.props.navigation.navigate('UserView', {id: item});
                            }}>
                                <Text># {item.name}</Text>
                            </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}
