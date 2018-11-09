import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class UserView extends React.Component {

    render() {
        const {navigation} = this.props.navigation.state.params.id;
        return (
        <View style={styles.container}>
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 20}}>
                        <Text style={{fontSize: 17}}>Page info de l'utilisateur</Text>
                    </View>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});