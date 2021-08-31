import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Appbar } from '../components/Appbar'

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar />
      <View>
        <Text>Log in</Text>
        <TextInput value="Email Address" />
        <TextInput value="Password" />
        <View>
          <Text>Submit</Text>
        </View>
        <View>
          <Text>Not registered?</Text>
          <Text>Sign up here!</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})