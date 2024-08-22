import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import GateHeader from './GateHeader';
function GatePage() {
    return (
        <ScrollView>
            <GateHeader/>        
            <View style={styles.container}>
                 <Text>Surveryor</Text>
            </View>  
        </ScrollView>
    )
}

export default GatePage


const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'space-between', alignItems: 'center'

    },

});
