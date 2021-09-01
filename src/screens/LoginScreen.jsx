import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { SubmitButton } from '../components/Button'

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log in</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />
        <SubmitButton label="Submit" onPress={() => navigation.navigate("MemoList")} />
        <View style={{ "flexDirection": "row" }}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Sign up here!</Text>
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