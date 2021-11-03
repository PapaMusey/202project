import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator}from '@react-navigation/stack'; 
import Login from './screens/Login.js';
import Home from './screens/Home.js'; 

export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainNavigator.Navigator initialRouteName="Login"> 
          <MainNavigator.Screen name="Login" component={Login}/>
          <MainNavigator.Screen name="Home" component={Home}/>
        </MainNavigator.Navigator>
      </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#888', 
    fontSize: 18,
    margin: 20,
  },

});
