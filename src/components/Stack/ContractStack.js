import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

//contracts
import ContractList from "../../screens/contracts/ContractList";
import ContractDetail from "../../screens/contracts/ContractDetail";
import ContractForm from "../../screens/contracts/ContractForm";

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import Entypo from 'react-native-vector-icons/Entypo'; 
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

function ContractStack() {
    return (
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerLeft: () => <Entypo onPress={navigation.toggleDrawer} style={{paddingLeft: 7}} name="menu" size={28} /> ,
      })}
      >
        <Stack.Screen name="ContractList" component={ContractList} 
          options={{
            title: "Home Screen",
            headerStyle: {
              backgroundColor: '#714B67'
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="ContractDetail" component={ContractDetail} 
          options={{
            title: "Detail Screen",
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen name="ContractForm" component={ContractForm} 
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
  
export default ContractStack