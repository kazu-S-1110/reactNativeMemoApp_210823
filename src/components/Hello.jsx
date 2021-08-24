import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types';

export const Hello = ({ children, bang, style }) => {
  return (
    <View>
      {/* 配列として書くことで同じプロパティであれば上書き、異なるプロパティなら足し合わせられる、後ろの方が優先される */}
      <Text style={[styles.text, style]}>
        Hello {children}
        {bang ? '!' : ''}
      </Text>
    </View>
  );
};

Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

Hello.defaultProps = {
  bang: false,
  style: null,
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
