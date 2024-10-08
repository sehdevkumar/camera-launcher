import { View, Text, StyleSheet, ScrollView } from 'react-native';
import LandingPage from './Landing/page';
import React = require('react');

export default function HomeScreen() {
    return (

        <View style={styles.container}>

            <View style={styles.LandingContainer}>
                <LandingPage />
            </View>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#f0f0f0'
    },
    LandingContainer: {
         flex:1,
         height:'100%',
         width:'100%',
    }
});
