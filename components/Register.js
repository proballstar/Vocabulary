import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { TextInput, Title } from 'react-native-paper';
import firebase from 'firebase'
import "firebase/firestore"

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            grade: null,
            responce: '',
        }

        this.onSignUp = this.onSignUp.bind(this)

    }

    onSignUp() {
        const { email, password, grade } = this.state;

        if ( email == '' || password == '' || grade == null) {
            this.setState({ responce: 'Please fill out ALL fields of the form. Thank you'})
        } else {

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid)
            .set({
                grade, 
                email
            })
            console.log(result)
        })
        .catch((error) => this.setState({ responce: `Error of code ${error.code} with message ${error.message}` }))
    }}



    render() {
        return (
            <View>
                
            <View style={{ padding: 20}}></View>
                <TextInput onChangeText={(email) => this.setState({ email })}  placeholder="email"/>
                <TextInput onChangeText={(password) => this.setState({ password})} placeholder="password"/>
                <TextInput onChangeText={(grade) => this.setState({ grade })} placeholder="grade" />
                <Button onPress={() => this.onSignUp()} title="Sign up" />
                <Text>{this.state.responce}</Text>
            </View>
        )
    }
}
