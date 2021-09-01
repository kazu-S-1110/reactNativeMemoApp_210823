import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { CircleButton } from '../components/CircleButton'
import KeyboardSafeView from '../components/KeyboardSafeView'

export const MemoCreateScreen = () => {
  return (
    <KeyboardSafeView enabled
      style={styles.container}>
      <View style={styles.inputContainer} >
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
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
