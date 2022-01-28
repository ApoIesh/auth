import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import auth from '@react-native-firebase/auth';


class LoginForm extends Component {
    state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '' });
        auth().createUserWithEmailAndPassword(email, password)
            .catch(() => {
                auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed.' });
                    });
            });
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@email.com"
                        label="email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        secureTextEntry={false}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder='passwoed'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        label="password"
                        secureTextEntry={true}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle} >
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} />
                </CardSection>
            </Card>
        );
    }
}


const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'

    }
})


export default LoginForm;