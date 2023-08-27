import React, { useState } from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './components/HomeScreen'
import Home2 from './components/Home2'
import CounterScreen from './components/counterScreen'
import MediaNotas from './components/MediaNotas'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home2" component={Home2} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Form" component={MediaNotas} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
