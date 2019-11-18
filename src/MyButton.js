import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export const MyButton = props => (
    <View style={styles.buttonContainer}>
        <Button
            style={props.style}
            title={props.title}
            onPress={props.onPress}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff111'
    },
    buttonContainer: {
        flex: 1,
        // height: 100,
        // width: 100,
        frexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000fff'
    }
});
