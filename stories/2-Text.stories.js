import React from 'react';
import { Text, StyleSheet } from 'react-native';
// import { text, boolean, number } from '@storybook/addon-knobs';
import { withKnobs } from '@storybook/addon-knobs';
//import { withKnobs } from '@storybook/addon-ondevice-knobs';

//export
export default {
    title: 'Text',
    decorators: [withKnobs]
};

const Title = ({ title = 'ccc' }) => <Text>{title}</Text>;

export const text = () => <Text style={styles.container}>AAAAAsaskjfk</Text>;
export const text2 = () => {
    const name = 'abc';
    //const name2 = text('Name', 'Arunoda Susiripala');

    return <Title title={name} />;
};
export const text3 = () => <Title />;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 44
    }
});
