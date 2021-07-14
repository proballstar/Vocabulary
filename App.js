// Default Imports
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';

//Firebase
import * as firebase from 'firebase'

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Components: Not Logged in
import Register from './components/Register';
import Login from './components/Login';
import Main from './components/Main';

//Components: Logged In
import Home from './components/Home';
import TestYourSkills from './components/TestYourSkills';
import WordList from './components/WordList';
import Signout from './components/Signout';

const firebaseConfig = {
  apiKey: "AIzaSyCYo-trhj_tpol7CsxPDkMFvMeGlwoUdNU",
  authDomain: "vocabulary-9389d.firebaseapp.com",
  projectId: "vocabulary-9389d",
  storageBucket: "vocabulary-9389d.appspot.com",
  messagingSenderId: "1002755657012",
  appId: "1:1002755657012:web:a6868e387bcc3c7798a961",
  measurementId: "G-VM2XPJFPFL"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}


const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default class App extends Component {

  constructor(props){

    super()

    this.state = {
      logedIn: false,
      loaded: false 
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ logedIn: true, loaded: true })
      } else {
        this.setState({ logedIn: false, loaded: true })
      }
    })
  }




  render() {

    const { logedIn, loaded } = this.state;

    if (!loaded) {
      return (
        <View> 
          <Text>Loading...</Text> 
        </View>
      )
    }

    if(!logedIn) {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Main} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )}}/>
          <Tab.Screen name="Register" component={Register} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-multiple-plus" color={color} size={26} />
          )}} />
          <Tab.Screen name="Login" component={Login} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          )}}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
 } else {
   return (
     <NavigationContainer>
       <Tab.Navigator initialRouteName="Home">
         <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )}} />
         <Tab.Screen name="Word List" component={WordList} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
          )}}/>
         <Tab.Screen name="Test Your Skills" component={TestYourSkills} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="check-decagram" color={color} size={26} />
          )}}/>
        <Tab.Screen name="Signout" component={Signout} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={26} />
          )}}/>
       </Tab.Navigator>
     </NavigationContainer>
   )
 }


}
}



//3:31:26 Instragm Clone
// return (
 // <View>
     
 // <View style={{ padding: 20}}></View>
  //<Text> Logged in as {firebase.auth().currentUser.email} </Text>
  //<Button onPress={() => firebase.auth().signOut()} title="Signout"></Button>
//</View>
