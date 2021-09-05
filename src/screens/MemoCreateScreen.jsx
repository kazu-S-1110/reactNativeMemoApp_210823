import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { CircleButton } from '../components/CircleButton'
import KeyboardSafeView from '../components/KeyboardSafeView'
import firebase from 'firebase'

export const MemoCreateScreen = ({ navigation }) => {
  const handlePress = () => {
    const db = firebase.firestore()
    const ref = db.collection("memos") //memosというコレクションの参照先を作成
    ref.add({
      bodyText: "hello"
    }).then((docRef) => { //docRefは作成されたデータへの参照が渡ってくる
      console.log("Created!", docRef.id)
      navigation.goBack()
    }
    ).catch(err => console.log(err))

  }


  return (
    <KeyboardSafeView enabled
      style={styles.container}>
      <View style={styles.inputContainer} >
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton name="check" onPress={handlePress} />
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
