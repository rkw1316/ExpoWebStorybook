import React from 'react';
import { Button, View } from 'react-native';

export const MyButton = props => (
    <View style={props.viewStyle}>
        <Button
            style={props.buttonStyle}
            title={props.title}
            onPress={props.onPress}
            disabled={props.disabled}
        />
    </View>
);
