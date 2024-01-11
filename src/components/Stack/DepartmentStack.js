import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

//departments
import DepartmentList from "../../screens/departments/DepartmentList";
import DepartmentDetail from "../../screens/departments/DepartmentDetail";
import DepartmentForm from "../../screens/departments/DepartmentForm";

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import Entypo from 'react-native-vector-icons/Entypo'; 
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

function DepartmentStack() {
    return (
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerLeft: () => <Entypo onPress={navigation.toggleDrawer} style={{paddingLeft: 7}} name="menu" size={28} /> ,
      })}
      >
        <Stack.Screen name="DepartmentList" component={DepartmentList} 
          options={{
            title: "Home Screen",
            headerStyle: {
              backgroundColor: '#714B67'
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="DepartmentDetail" component={DepartmentDetail} 
          options={{
            title: "Detail Screen",
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen name="DepartmentForm" component={DepartmentForm} 
          options={{
            title: "Form Screen",
            headerStyle: {
              backgroundColor: 'green'
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    );
  }
  
export default DepartmentStack