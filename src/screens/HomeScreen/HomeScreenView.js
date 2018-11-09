import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class HomeScreenView extends React.Component {
    constructor(props){
        super(props);
        this.state ={}
    }
/*    componentDidMount() {
        setTimeout( () =>
        { this.props.navigation.navigate('Counter')}, 3000);
    }*/
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{fontSize: 20}}>BIENVENUE</Text>
                    <Image style={styles.image} source={{uri: 'https://images.theconversation.com/files/171265/original/file-20170529-25219-8dc8r2.jpg?ixlib=rb-1.1.0&rect=9%2C0%2C3308%2C1606&q=45&auto=format&w=1356&h=668&fit=crop'}}/>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                        this.props.navigation.navigate('TimeoutView');
                    }}>
                        <Text style={styles.text}>Découvrir l'appli</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 20,
        margin: 10,
        borderRadius: 8,
    },
    text: {
        fontSize: 17
    },
    image: {
        width:300,
        height: 300,
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 10
    }
});