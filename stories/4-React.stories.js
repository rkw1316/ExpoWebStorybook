import React from 'react';
import { Text, Button, StyleSheet } from 'react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { MyButton } from '../src/MyButton';

export default {
    title: 'Storybook Knobs',
    decorators: [withKnobs]
};
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.

// Knobs for React props
export const withAButton = () => (
    <button disabled={boolean('Disabled', false)}>
        {text('Label', 'Hello Storybook')}
    </button>
);

export const CButton = () => (
    <MyButton
        viewStyle={styles.buttonContainer}
        buttonStyle={styles.buttonContainer}
        title={text('Label', 'Hello Storybook')}
        onPress={action('tap')}
        disabled={boolean('Disabled', false)}
    />
);

// Knobs as dynamic variables.
export const asDynamicVariables = () => {
    const name = text('Name', 'Arunoda Susiripala');
    const age = number('Age', 89);

    const content = `I am ${name} and I'm ${age} years old.`;
    return <Text>{content}</Text>;
};

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
        height: 100,
        width: 100,
        frexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000fff'
    }
});
