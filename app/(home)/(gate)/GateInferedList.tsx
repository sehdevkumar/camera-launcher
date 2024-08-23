import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import GateInferedCard from './GateInferedCard';
function GateInferedPage() {
    return (
       <View style={styles.container}>
            <GateInferedCard/>
            <GateInferedCard />
            <GateInferedCard />
            <GateInferedCard />
            <GateInferedCard />
            <GateInferedCard />
            <GateInferedCard />
            <GateInferedCard />
            <GateInferedCard />
            <GateInferedCard />
            <GateInferedCard />
            <GateInferedCard />
            <GateInferedCard />
            <GateInferedCard />

       </View>
    )
}

export default GateInferedPage


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        gap:20,
        flexWrap:'wrap',
        flex: 1, justifyContent:'space-around', alignItems: 'center'
    },

});
