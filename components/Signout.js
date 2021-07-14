import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'
import firebase from 'firebase'

export default function Signout() {

    const [message, setMessage ] = useState()

    function signUserOut (){
        firebase.auth().signOut().then(() => {
            console.log('Successful')
          }).catch((error) => {
              console.log(error)
          });
    }
    return (
        <View>
            
            <View style={{ padding: 20}}></View>
            <Button onPress={() => signUserOut()} title="Signout" />
            <Text>{message}</Text>
        </View>
    )
}
