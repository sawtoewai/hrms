import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

//recruitments
import RecruitmentList from "../../screens/recruitments/RecruitmentList";
import RecruitmentDetail from "../../screens/recruitments/RecruitmentDetail";
import RecruitmentForm from "../../screens/recruitments/RecruitmentForm";

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import Entypo from 'react-native-vector-icons/Entypo'; 
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

function RecruitmentStack() {
    return (
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerLeft: () => <Entypo onPress={navigation.toggleDrawer} style={{paddingLeft: 7}} name="menu" size={28} /> ,
      })}
      >
        <Stack.Screen name="RecruitmentList" component={RecruitmentList} 
          options={{
            title: "Home Screen",
            headerStyle: {
              backgroundColor: '#714B67'
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="RecruitmentDetail" component={RecruitmentDetail} 
          options={{
            title: "Detail Screen",
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen name="RecruitmentForm" component={RecruitmentForm} 
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
  
export default RecruitmentStack