import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import MainStack from './src/components/Stack/MainStack';

const App = () => {
  return (
    <NavigationContainer>
        <MainStack/>
    </NavigationContainer>
  )
}

export default App