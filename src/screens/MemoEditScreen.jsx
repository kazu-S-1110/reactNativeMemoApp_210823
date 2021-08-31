import React from 'react'
import { Appbar } from '../components/Appbar'
import { Platform, TextInput, View, StyleSheet } from 'react-native'
import { CircleButton } from '../components/CircleButton'
import { KeyboardAvoidingView } from 'react-native'

export const MemoEditScreen = () => {
  return (
    <KeyboardAvoidingView enabled behavior="height" style={styles.container}>
      <Appbar />
      <View style={styles.inputContainer} >
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 18,
    lineHeight: 24
  }
})
