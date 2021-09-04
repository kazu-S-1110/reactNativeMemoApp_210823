import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { SubmitButton } from '../components/Button'
import firebase from 'firebase'

export const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handlePress = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        // console.log(user.uid)
        Alert.alert(user.uid)
      })
    navigation.reset({
      index: 0,
      routes: [{ name: "MemoList" }]
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={e => setEmail(e)}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email address"
          textContentType="emailAddress"
        />

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={e => setPassword(e)}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton label="Submit" onPress={handlePress} />
        <View style={{ "flexDirection": "row" }}>
          <Text style={styles.footerText}>Already registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "LogIn" }]
              })
            }}>
            <Text style={styles.footerLink}>Login!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8"
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "700",
    marginBottom: 24
  },
  input: {
    fontSize: 17,
    height: 48,
    borderColor: "#DDD",
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    marginBottom: 16
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 10
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467fd3"
  }

})