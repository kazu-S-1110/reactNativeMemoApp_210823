import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginScreen } from './src/screens/LoginScreen'
import { MemoCreateScreen } from './src/screens/MemoCreateScreen'
import { MemoDetailScreen } from './src/screens/MemoDetailScreen'
import { MemoEditScreen } from './src/screens/MemoEditScreen'
import { MemoListScreen } from './src/screens/MemoListScreen'
import { SignUpScreen } from './src/screens/SignUpScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MemoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


