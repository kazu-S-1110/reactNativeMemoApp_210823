import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export const Hello = ({ children }) => {
  return (
    <View>
      <Text style={styles.text}>Hello {children}</Text>
    </View>
  );
};

Hello.propTypes = {
  children: string.isRequired,
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
