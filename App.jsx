import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase'
import {
  FIREBASE_APIKEY,
  FIREBASE_PROJECTID,
  FIREBASE_AUTHDOMAIN,
  FIREBASE_STORAGEBUCKET,
  FIREBASE_MESSAGINGSENDERID,
  FIREBASE_APPID
} from '@env'
import { LoginScreen } from './src/screens/LoginScreen'
import { MemoCreateScreen } from './src/screens/MemoCreateScreen'
import { MemoDetailScreen } from './src/screens/MemoDetailScreen'
import { MemoEditScreen } from './src/screens/MemoEditScreen'
import { MemoListScreen } from './src/screens/MemoListScreen'
import { SignUpScreen } from './src/screens/SignUpScreen'

const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE_MESSAGINGSENDERID,
  appId: FIREBASE_APPID
}
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

require('firebase/firestore/')


const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn"
        screenOptions={{
          headerStyle: { backgroundColor: "#467fd3" },
          headerTitleStyle: { color: "#fff", fontSize: 24 },
          headerTitle: "Memo App",
          headerTintColor: "#fff", //戻るボタンの色を指定
          headerBackTitle: "Back", //戻るボタンのタイトルを指定
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, //これでAndroidの挙動をIOSにさせることができる。
          gestureEnabled: true, //androidは標準でスワイプが無効になっているのでこれで有効にできる。
          gestureDirection: "horizontal"
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="LogIn" component={LoginScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
          }}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
          }} />

      </Stack.Navigator>
    </NavigationContainer >
  )
}


