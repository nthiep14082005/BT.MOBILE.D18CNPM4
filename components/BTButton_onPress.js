import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function BT4() {
  const handlePress = () => {
    Alert.alert("hello");
  };

  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Hello, World!</Text>
        <Button title="Press me" onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 200,
    height: 200,
    backgroundColor: '#69dd1b',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: '#1d1d19',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
