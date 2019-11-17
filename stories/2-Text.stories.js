import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default {
    title: 'Text'
};

export const text = () => <Text style={styles.container}>AAAAAsaskjfk</Text>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
