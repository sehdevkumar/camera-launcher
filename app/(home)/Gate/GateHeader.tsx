import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

function GateHeader() {
    const [activeTab, setActiveTab] = useState('Gate1');

    const tabs = ['Gate1', 'Gate2', 'Gate3', 'Gate4', 'Gate5', 'Gate6', 'Gate7','Gate8','Gate9','Gate10'];

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollContainer}
            contentContainerStyle={styles.contentContainer}
        >
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab}
                    style={[
                        styles.tab,
                        activeTab === tab && styles.activeTab
                    ]}
                    onPress={() => setActiveTab(tab)}
                >
                    <Text style={activeTab === tab ? styles.activeText : styles.inactiveText}>
                        {tab}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

export default GateHeader;

const styles = StyleSheet.create({
    scrollContainer: {
        width: '100%',
        height: 50,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    tab: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    activeTab: {
        borderBottomWidth: 3,
        borderBottomColor: '#007bff',
    },
    activeText: {
        color: '#007bff',
        fontWeight: 'bold',
    },
    inactiveText: {
        color: '#000',
    },
});
