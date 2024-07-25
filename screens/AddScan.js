import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import QRCodeGenerator from './QRCodeGenerator';
import { insertQRCode } from './db'; // Ajustez le chemin si nécessaire

const AddScan = ({ navigation }) => {
  const [name, setName] = useState('');
  const [faritra, setFaritra] = useState('');
  const [qrCode, setQrCode] = useState('');

  const handleGenerateQRCode = () => {
    const generatedQRCode = `https://example.com/api/person/${name}-${Math.random().toString(36).substring(2, 15)}`;
    setQrCode(generatedQRCode);
  };

  const handleSave = async () => {
    if (name && faritra && qrCode) {
      try {
        await insertQRCode(name, qrCode, faritra);
        Alert.alert('Success', 'QR Code ajouté avec succès!');
        navigation.goBack();
      } catch (error) {
        Alert.alert('Error', 'Erreur lors de l\'ajout du QR Code.');
        console.error('Error inserting QR code:', error);
      }
    } else {
      Alert.alert('Validation Error', 'Veuillez remplir tous les champs et générer un QR Code.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Faritra"
        value={faritra}
        onChangeText={setFaritra}
        style={styles.input}
      />
      <Button title="Generate QR Code" onPress={handleGenerateQRCode} />
      {qrCode ? (
        <QRCodeGenerator value={qrCode} />
      ) : null}
      <Button title="Save QR Code" onPress={handleSave} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default AddScan;
