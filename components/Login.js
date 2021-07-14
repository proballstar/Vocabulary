import React, { Component } from 'react'
import { TextInput, Button } from 'react-native-paper'
import { Text, View } from 'react-native'
import firebase  from 'firebase'

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            message: ''

        }

        this.onLogin = this.onLogin.bind(this)



    }

    onLogin() {
        const { email, password } = this.state
        this.setState({ message: `got the ${email} and ${password} `})
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => this.setState({ message: `User ${email} successfully logged in` })) 
    }

    render() {
        return (
            <View>
                
            <View style={{ padding: 20}}></View>
                <TextInput onChangeText={(email) => this.setState({ email })}  placeholder="email"/>
                <TextInput onChangeText={(password) => this.setState({ password})} placeholder="password"/>
                <Button mode="contained" onPress={() => this.onLogin()}> Login </Button>
                <Text>{this.state.message}</Text>
            </View>
        )
    }
}
