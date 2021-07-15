import React, { Component } from 'react'
import { Button, Text, View, FlatList } from 'react-native'
import firebase from 'firebase'
import Word_List from './utils/word_list_utils.constants'

export default class WordList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Loading...',
            hasWords: false,
            set: null,
            wordMap: [],
            grade: null,
            wordList: Word_List
        }

        this.main = this.main.bind(this)
    }

    componentDidMount() {
        this.main()
        console.log('Main was run')
    }

    main() {   
        firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get()
            .then((user) => {
                if (user.exists) {

                    const { set, grade, email } = user.data()
                    
                    this.setState({ wordMap: Word_List[grade][set][0], hasWords: true})

                } else {
                    this.setState({ message: `user does not exist`})
                }
            })
    }

      
        

    

    render() {
        
       if (this.state.hasWords) {
           return (
            <View>
                <View style={{ padding: 20}}></View>
                <Text>{this.state.wordMap}</Text>
                <Text>{this.state.wordMap.map((item, i) => {
                    return (
                    <View>
                        
                        <View style={{ padding: 20}}></View>
                        <Text style={{ fontSize: 20}}>{item} with index {i} then</Text>
                        <View style={{ padding: 20}}></View>
                    </View>
                    )
                })}</Text>
            </View>
           )
       } else {
           return ( 
            <View>
                <View style={{ padding: 20}}></View>
                <Text>Loading...</Text>
            </View>
           )
       }
    }
}

