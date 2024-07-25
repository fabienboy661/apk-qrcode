import React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Convention{'\n'} 
                Torio{'\n'}
                Ny Vaovao Tsara
            </Text>
            <Image
                source={require('../assets/image.png')}
                style={styles.image}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Start"
                    onPress={() => navigation.navigate('Scanner')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Pour centrer verticalement
        alignItems: 'center', // Pour centrer horizontalement
        padding: 20, // Ajoutez du padding pour éviter que le contenu ne touche les bords de l'écran
    },
    image: {
        width: width * 0.9, // 90% de la largeur de l'écran
        height: height * 0.5, // 50% de la hauteur de l'écran
        resizeMode: 'contain', // Redimensionner l'image pour qu'elle soit contenue dans les dimensions données
        marginBottom: 20, // Ajustez selon vos besoins
    },
    text: {
        fontSize: width * 0.05, // 5% de la largeur de l'écran
        textAlign: 'center',
        marginVertical: 20,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 30,
        width: '60%',
        paddingHorizontal: 16,
        // backgroundColor: 'green', // Couleur de fond verte
        borderColor: 'white', // Couleur de la bordure
        borderWidth: 2, // Épaisseur de la bordure
        borderRadius: 10, // Coins arrondis
    },
    button: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    resultContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
});

export default Home;
