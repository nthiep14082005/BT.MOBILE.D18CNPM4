import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Square component
function Square({ color, label }) {
  return (
    <View style={[styles.square, { backgroundColor: color }]}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

export default function BT5() {
  return (
    <View style={styles.container}>
      <Square color="#ff6b6b" label="Square 1" />
      <Square color="#4dabf7" label="Square 2" />
      <Square color="#69db7c" label="Square 3" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  square: {
    width: 100,
    height: 100,
    borderRadius: 6,
    justifyContent: 'center', // căn giữa chữ theo chiều dọc
    alignItems: 'center',     // căn giữa chữ theo chiều ngang
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});
