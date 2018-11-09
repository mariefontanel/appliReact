import React, { Component } from 'react';

import LoginView from '../../screens/Login/LoginView';
import TimeOutView from '../../screens/Timeout/TimeoutView';

export default class ApiLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    render() {

        if (this.state.isLoggedIn)
            return <TimeOutView
                //onLogoutPress={() => this.setState({isLoggedIn: false})}
            />;
        else
            return <LoginView
                onLoginPress={() => this.setState({isLoggedIn: true})}
            />;
    }

}