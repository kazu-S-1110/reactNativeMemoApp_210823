import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Hello = () => {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});
