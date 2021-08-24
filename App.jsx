import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>Log out</Text>
        </View>
      </View>

      <View>
        <View>
          <View>
            <Text>Buy list</Text>
            <Text>2021.08.25</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>Buy list</Text>
            <Text>2021.08.25</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>Buy list</Text>
            <Text>2021.08.25</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>Buy list</Text>
            <Text>2021.08.25</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      <View>
        <Text>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
