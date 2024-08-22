import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import LandingCard from './LandingCards';

function LandingPage() {
    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 30 }}>Select Gate</Text>
            <LandingCard />
        </View>
    )
}

export default LandingPage


const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'

    },

});
