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
      <Stack.Navigator initialRouteName="LogIn"
        screenOptions={{
          headerStyle: { backgroundColor: "#467fd3" },
          headerTitleStyle: { color: "#fff", fontSize: 24 },
          headerTitle: "Memo App",
          headerTintColor: "#fff", //戻るボタンの色を指定
          headerBackTitle: "Back" //戻るボタンのタイトルを指定
        }}
      >

        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="LogIn" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

      </Stack.Navigator>
    </NavigationContainer >
  )
}


