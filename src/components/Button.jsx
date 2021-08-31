import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const SubmitButton = ({ label }) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
})