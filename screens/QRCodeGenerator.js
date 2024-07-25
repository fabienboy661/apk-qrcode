// QRCodeGenerator.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeGenerator = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Code:</Text>
      <QRCode
        value={value}
        size={200}
        color="black"
        backgroundColor="white"
      />
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
    fontSize: 18,
    marginBottom: 20,
  },
});

export default QRCodeGenerator;
