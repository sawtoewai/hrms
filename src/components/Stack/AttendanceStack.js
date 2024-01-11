import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

//attendances
import AttendanceList from "../../screens/attendances/AttendanceList";
import AttendanceDetail from "../../screens/attendances/AttendanceDetail";
import AttendanceForm from "../../screens/attendances/AttendanceForm";

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import Entypo from 'react-native-vector-icons/Entypo'; 
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

function AttendanceStack() {
    return (
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerLeft: () => <Entypo onPress={navigation.toggleDrawer} style={{paddingLeft: 7}} name="menu" size={28} /> ,
      })}
      >
        <Stack.Screen name="AttendanceList" component={AttendanceList} 
          options={{
            title: "Home Screen",
            headerStyle: {
              backgroundColor: '#714B67'
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="AttendanceDetail" component={AttendanceDetail} 
          options={{
            title: "Detail Screen",
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen name="AttendanceForm" component={AttendanceForm} 
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
  
export default AttendanceStack