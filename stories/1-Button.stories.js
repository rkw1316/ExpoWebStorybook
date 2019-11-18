import React from 'react';
import { action } from '@storybook/addon-actions';
import { MyButton } from '../src/MyButton';
import { StyleSheet } from 'react-native';

export default {
    title: 'atoms|MyButton',
    component: MyButton
    // decorators: [... ],
    // parameters: { ... }
};

export const button = () => <MyButton />;

export const normal = () => (
    <MyButton
        title="AAAannbb"
        style={styles.buttonContainer}
        onPress={action('clickeda')}
    />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333'
    },
    buttonContainer: {
        height: 100,
        width: 200,
        padding: 10,
        backgroundColor: '#FFF000',
        margin: 3
    }
});
