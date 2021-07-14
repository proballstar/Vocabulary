import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function Main({ navigation }) {
    return (
        <View>
            <View style={{ padding: 20}}></View>
            <Button title="Register" onPress={() => navigation.navigate('Register')}/>
            <Text>Already have an account?</Text>
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
    )
}


const styles = StyleSheet.create({
    buttonStyles: {
        padding: 10,
    }
})

