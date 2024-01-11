import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import Entypo from 'react-native-vector-icons/Entypo'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

//login
import Login from "../../screens/auth/login";

const Stack = createStackNavigator();

function LoginStack(){
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="LoginScreen" component={Login} />
      </Stack.Navigator>
    )
  }

export default LoginStack