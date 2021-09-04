import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const LogOutButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
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