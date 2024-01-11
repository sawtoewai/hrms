import React, { Component } from "react";
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { endpoints } from "../../services/endpoints";

class Login extends Component{

  state = {
    user: {
      username: '',
      password: ''
    },
  }

  inputChanged = (name, value) => {
    let user = this.state.user;
    user[name] = value;
    this.setState({user: user});
  }

  clickLogin  = () =>  {
    console.log('clickLogin call');
    fetch(endpoints.auth, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.user)
    })
    .then( resp => resp.json())
    .then( res => {
        console.log(res.token);
        AsyncStorage.setItem('hrms-token', res.token);
        if (res.token) {
          this.props.navigation.navigate('Drawer')
        } else {
          Alert.alert("Username & Password Invalid !");
        }
    }).catch( error => console.log(error))
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/images/icon.png")} />
   
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            onChangeText={value => this.inputChanged('username', value)}
          />
   
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={value => this.inputChanged('password', value)}
          />
   
          <Text style={styles.signup}> Create New Account ?</Text>
   
          <TouchableOpacity style={styles.login} onPress={this.clickLogin}>
            <Text style={{ color: 'white'}}> Login </Text>
          </TouchableOpacity>
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width: 100,
    height: 100
  },
  inputText: {
    height: 50,
    padding: 10,
    height: 45,
    width: "80%",
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#714B67', 
    borderWidth: 1
  },
  signup: {
    height: 20,
    marginBottom: 20,
  },
  login: {
    width: "70%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#714B67",
  },
});

export default Login;
