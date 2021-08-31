import React from 'react'
import { Appbar } from '../components/Appbar'
import { TextInput, View, StyleSheet, Alert } from 'react-native'
import { CircleButton } from '../components/CircleButton'
import KeyboardSafeView from '../components/KeyboardSafeView'

export const MemoEditScreen = () => {
  return (
    <KeyboardSafeView enabled style={styles.container}>
      <Appbar />
      <View style={styles.inputContainer} >
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton name="check" onPress={() => {
        Alert.alert("pressed!")
      }} />
    </KeyboardSafeView>
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
