import React from "react";
import { View, Text } from "react-native"; 

export default function Login(params) {
  const navigation= params.navigation;
    return (
    <View style={{flex: 1, justifyContent: "center", alignContent: "center", backgroundColor: "red"}}>
      <Text style={{color: "black", fontSize: 40}}>Login</Text>
        
    </View>
    );
  }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
  
//     text: {
//       color: '#888', 
//       fontSize: 18,
//       margin: 20,
//     },
  
//   });