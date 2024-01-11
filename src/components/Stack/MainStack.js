import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';


//icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import Entypo from 'react-native-vector-icons/Entypo'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginStack from "./LoginStack";
import MyDrawer from "../Drawer/MyDrawer";


const Stack = createStackNavigator();

function MainStack() {
    return (
      <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={LoginStack} />
        <Stack.Screen name="Drawer" component={MyDrawer} />
       
      </Stack.Navigator>
    );
  }
  
export default MainStack