import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool } from 'prop-types';

export const Hello = ({ children, bang }) => {
  return (
    <View>
      <Text style={styles.text}>
        Hello {children}
        {bang ? '!' : ''}
      </Text>
    </View>
  );
};

Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
};

Hello.defaultProps = {
  bang: false,
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
