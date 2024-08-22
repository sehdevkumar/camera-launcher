import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function GateInferedCard() {
    return (
        <View style={styles.card}>
            <Text style={styles.plateNumber}>DL 01 HG 5425</Text>
            <Text style={styles.time}>Today 11:00 am</Text>
            <Text style={styles.size}>W 5 / M 3.5 - W 12 / M 10.5</Text>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://via.placeholder.com/150' }}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Survey</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Damage</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // for Android shadow
        borderWidth: 1,
        borderColor: '#ddd',
        width: 250, // Adjust according to your design
    },
    plateNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    time: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    size: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    image: {
        width: 100,
        height: 100,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2, // for Android shadow
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
    },
});
