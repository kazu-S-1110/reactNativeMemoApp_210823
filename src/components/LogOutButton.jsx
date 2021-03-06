import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native'
import firebase from 'firebase'
import { useNavigation } from '@react-navigation/native'

export const LogOutButton = () => {
  const navigation = useNavigation()
  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "LogIn" }]
        })
      }).catch((err) => Alert.alert(err.message)
      )
  }


  return (
    <TouchableOpacity style={styles.container} onPress={handleLogout}>
      <Text style={styles.label} >Log Out</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: "rgba(255,255,255,0.7)"
  }
})