import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigatorContainer}from '@react-navigation/stack'
import {createStack}from '@react-navigation/stack'


export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainNavigator>
          <MainNavigator.Screen name="Login" component={Login}/>
          <MainNavigator.Screen name="Home" component={Home}/>
        </MainNavigator>
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
