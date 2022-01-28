import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './Components/common';
import LoginForm from './Components/LoginForm';




class App extends Component {
    componentWillUnmount() {
      
    }
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <LoginForm />
            </View>
        );
    }
}



export default App;