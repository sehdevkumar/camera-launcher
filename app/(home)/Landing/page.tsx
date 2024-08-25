import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import LandingCard from './LandingCards';
import { useAssets } from "expo-asset";





function LandingPage() {
    return (
      <View style={styles.container}>
        <Image source={require("../../../assets/images/react-logo.png")} />
        <Text style={{ fontSize: 30 }}>Select From</Text>
        <LandingCard />
      </View>
    );
}

export default LandingPage


const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },

});
