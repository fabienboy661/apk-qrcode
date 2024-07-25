import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getAllQRCodes, deleteQRCode } from './db'; // Assurez-vous d'exporter deleteQRCode depuis db.js

const List = ({ navigation }) => {
  const [qrCodes, setQrCodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allQRCodes = await getAllQRCodes();
        setQrCodes(allQRCodes);
      } catch (error) {
        console.error('Error fetching QR codes:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this QR Code?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              await deleteQRCode(id); // Assurez-vous d'implémenter deleteQRCode dans db.js
              setQrCodes(qrCodes.filter(qrCode => qrCode.id !== id));
            } catch (error) {
              console.error('Error deleting QR code:', error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleViewQRCode = (qrCode) => {
    // Affichez le QR Code ou naviguez vers un écran de détail
    navigation.navigate('QRCodeDetail', { qrCode }); // Assurez-vous que QRCodeDetail est configuré dans la navigation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qr Code Générés</Text>
      <FlatList
        data={qrCodes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Name: {item.name}</Text>
            <Text>QR Code: {item.qrCode}</Text>
            <Text>Faritra: {item.faritra}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleViewQRCode(item.qrCode)}
              >
                <Text style={styles.buttonText}>Afficher QR Code</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.deleteButton]}
                onPress={() => handleDelete(item.id)}
              >
                <Text style={styles.buttonText}>Supprimer</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default List;
