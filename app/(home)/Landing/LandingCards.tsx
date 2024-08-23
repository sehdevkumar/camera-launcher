import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {router} from 'expo-router'

function LandingCard() {
    

   function onCardClicked(path:string) {
    
       router.push(`/(home)/(gate)/${path}`)

   }


    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity  style={styles.card} onPress={(e)=> onCardClicked('gateIn')}>
                <Text style={styles.cardText}>Gate In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={(e) => onCardClicked('gateOut')}>
                <Text style={styles.cardText}>Gate Out</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LandingCard;

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    card: {
        backgroundColor: '#f9f9f9',
        justifyContent:'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        padding: 20,
        flex: 1,
        margin: 5,
        minHeight: 100,
        minWidth:150
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
});
