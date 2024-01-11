import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

//jobs
import JobList from "../../screens/jobs/JobList";
import JobDetail from "../../screens/jobs/JobDetail";
import JobForm from "../../screens/jobs/JobForm";

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import Entypo from 'react-native-vector-icons/Entypo'; 
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

function JobStack() {
    return (
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerLeft: () => <Entypo onPress={navigation.toggleDrawer} style={{paddingLeft: 7}} name="menu" size={28} /> ,
      })}
      >
        <Stack.Screen name="JobList" component={JobList} 
          options={{
            title: "Home Screen",
            headerStyle: {
              backgroundColor: '#714B67'
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="JobDetail" component={JobDetail} 
          options={{
            title: "Detail Screen",
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen name="JobForm" component={JobForm} 
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
  
export default JobStack