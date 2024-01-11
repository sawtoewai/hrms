import React from "react";
import { Text, View } from "react-native";

import { createDrawerNavigator } from '@react-navigation/drawer';

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import Entypo from 'react-native-vector-icons/Entypo'; 
import Ionicons from 'react-native-vector-icons/Ionicons';


import CustomDrawer from "./CustomDrawer";
import EmployeeStack from "../Stack/EmployeeStack";
import DepartmentStack from "../Stack/DepartmentStack";
import JobStack from "../Stack/JobStack";
import ContractStack from "../Stack/ContractStack";
import RecruitmentStack from "../Stack/RecruitmentStack";
import AttendanceStack from "../Stack/AttendanceStack";


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15
          }
      }}
      >
        <Drawer.Screen name="Employee" component={EmployeeStack} 
          options={{
            drawerIcon: ({color})=> (
            <AntDesign name="menufold" size={22} color={color} />  
          )}}
        />
         <Drawer.Screen name="Department" component={DepartmentStack} 
          options={{
            drawerIcon: ({color})=> (
            <AntDesign name="menufold" size={22} color={color} />  
          )}}
        />
        <Drawer.Screen name="Job" component={JobStack} 
          options={{
            drawerIcon: ({color})=> (
            <AntDesign name="menufold" size={22} color={color} />  
          )}}
        />
        <Drawer.Screen name="Contract" component={ContractStack} 
          options={{
            drawerIcon: ({color})=> (
            <AntDesign name="menufold" size={22} color={color} />  
          )}}
        />
        <Drawer.Screen name="Recruitment" component={RecruitmentStack} 
          options={{
            drawerIcon: ({color})=> (
            <AntDesign name="menufold" size={22} color={color} />  
          )}}
        />
        <Drawer.Screen name="Attendance" component={AttendanceStack} 
          options={{
            drawerIcon: ({color})=> (
            <AntDesign name="menufold" size={22} color={color} />  
          )}}
        />
      </Drawer.Navigator>
  );
}

export default MyDrawer;
