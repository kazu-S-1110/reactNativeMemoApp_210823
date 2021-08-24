import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>Memo App</Text>
          <Text style={styles.appbarRight}>Log out</Text>
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
    backgroundColor: '#eefffb',
  },
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#a4c3f0',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    color: 'rgba(255,255,255,0.8)',
    right: 20,
    bottom: 10,
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 50,
    color: 'white',
  },
});
