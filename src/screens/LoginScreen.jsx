import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { SubmitButton } from '../components/Button'
import firebase from 'firebase'

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    //もしユーザがログインしていればMemoListに遷移させる処理
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) { //ユーザが存在したら
        navigation.reset({
          index: 0,
          routes: [{ name: "MemoList" }]
        })
      }
    })
    return unsubscribe //useEffect内のreturn文はこの画面が離れる場合に実行される処理。監視はこの画面から離れたら中断させる。
  }, [])

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log(user.uid)
        navigation.reset({
          index: 0,
          routes: [{ name: "MemoList" }]
        })
      }).catch((err) => {
        console.log(err.code)
        Alert.alert(err.message)
      })
    //これまでの履歴をリセットして戻るボタンを表示しない記述
  }
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log in</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={e => setEmail(e)}
          placeholder="Email address"
          autoCapitalize="none"
          keyboardType="email-address"
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
        <SubmitButton
          label="Submit"
          onPress={handleLogin} />
        <View style={{ "flexDirection": "row" }}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "SignUp" }]
              })
            }}
          >
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