import 'react-native-gesture-handler';
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          borderRadius: 20,
          marginBottom: 60,
          width: 340,
          height: 200,
        }}
        source={require('../assets/products/shopapppicture1.png')}
      />
      <Text style={{ fontSize: 25, color: "blue" }}>Welcome to</Text>
      <Text style={{ fontSize: 35, fontWeight: "bold" }}>Prime Sale Shop</Text>
      <View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter Username"
        />
      </View> 
       <View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter Password"
        />
      </View> 
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("getProduct");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <Text style={{ paddingLeft: 5, color: "white" }}>Login</Text>
      </TouchableOpacity>
      <View style={{marginTop: 10, fontSize: 10, fontWeight: 'bold'}}>
      <Text>Don't have an account? <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>
  Sign Up
</Text></Text>
      </View>
    </View>
  );
}