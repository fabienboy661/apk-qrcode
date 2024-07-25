// QRCodeDetail.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg'; // Assurez-vous d'installer cette bibliothèque si vous l'utilisez

const QRCodeDetail = ({ route }) => {
  const { qrCode } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Code Detail</Text>
      <QRCode value={qrCode} size={200} />
      <Text style={styles.qrCodeText}>{qrCode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  qrCodeText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default QRCodeDetail;
