import React from 'react';
import { action } from '@storybook/addon-actions';
import { View, StyleSheet, Text, Button } from 'react-native';

export default {
    title: 'Button'
};

export const button = () => (
    <View style={styles.container}>
        <Button
            title="button"
            onPress={() => {
                console.log('press');
            }}
        ></Button>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
