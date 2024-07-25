// ScanResults.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScanResults = ({ route }) => {
  const { name, faritra } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Results</Text>
      <Text>Name: {name}</Text>
      <Text>Faritra: {faritra}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ScanResults;
