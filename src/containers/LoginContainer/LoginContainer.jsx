import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import Login from '../../components/login/Login';
import Home from '../../screen/Home';

export default class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
        };
    }

    handleLogin = async () => {
        const { email, password } = this.state;

        const validEmail = 'test@example.com';
        const validPassword = '123456';

        if (email === validEmail && password === validPassword) {
            // Store login status
            await AsyncStorage.setItem('token', 'logged_in');

            // Navigate to Home (or AppNavigator)
            this.props.navigation.replace(Home);  // or navigate('Home') if using stack
        } else {
            // Invalid credentials
            this.setState({ errorMessage: 'Invalid email or password' });
        }
    };

    handleEmailChange = (text) => {
        this.setState({ email: text, errorMessage: '' }); // clear error when typing
    };

    handlePasswordChange = (text) => {
        this.setState({ password: text, errorMessage: '' }); // clear error when typing
    };

    render() {
        return (
            <Login
                email={this.state.email}
                password={this.state.password}
                onEmailChange={this.handleEmailChange}
                onPasswordChange={this.handlePasswordChange}
                onLogin={this.handleLogin}
                errorMessage={this.state.errorMessage}
                navigation={this.props.navigation}
            />
        );
    }
}
