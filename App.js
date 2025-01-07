import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Hello, world</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 200,
    height: 200,
    backgroundColor: '#3498db', // Màu nền
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff', // Màu chữ trắng
    fontSize: 18,
  },
});
