import React from 'react'
import { TextInput, View, StyleSheet, Alert } from 'react-native'
import { CircleButton } from '../components/CircleButton'
import KeyboardSafeView from '../components/KeyboardSafeView'

export const MemoEditScreen = ({ navigation }) => {
  return (
    <KeyboardSafeView enabled style={styles.container}>
      <View style={styles.inputContainer} >
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton name="check" onPress={() => {
        Alert.alert("pressed!")
        navigation.goBack()

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
  }
})
