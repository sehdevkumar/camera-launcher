import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import GateHeader from './GateHeader';
import GateInferedPage from './GateInferedList';
function GatePage() {
    return (
        <ScrollView>
            <View style={{backgroundColor:'#FFFFFF'}}>
            <GateHeader/>        
            </View>
            <View style={styles.container}>
            <GateInferedPage/>
            </View>  
        </ScrollView>
    )
}

export default GatePage


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9f9f9',
      color:'#FFF'

    },

});
