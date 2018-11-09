import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Geolocation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
            // if true = GPS if false = WIFI
        );
    }

    render() {
        return (
            <View style={{ flexGrow: 1, alignItems: 'center', marginTop: 50 }}>
                <Text style={{fontSize: 18, marginBottom: 30}}>Voici vos coordonnées GPS :</Text>
                <Text style={{fontSize: 18, margin: 30}}>Latitude: {this.state.latitude}</Text>
                <Text style={{fontSize: 18, margin: 5}}>Longitude: {this.state.longitude}</Text>
                {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
            </View>
        );
    }
}

export default Geolocation;