import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Appbar } from '../components/Appbar'

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar />
      <View style={styles.inner}>
        <Text style={styles.title}>Log in</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonLabel}>Submit</Text>
        </View>
        <View style={{ "flexDirection": "row" }}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Text style={styles.footerLink}>Sign up here!</Text>
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
  buttonContainer: {
    backgroundColor: "#467fd3",
    borderRadius: 5,
    alignSelf: "flex-start",
    marginBottom: 24
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: "#fff",
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