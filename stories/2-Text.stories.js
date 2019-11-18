import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { MyFlatList } from './component/MyFlatList';
export default {
    title: 'Text'
};

export const text = () => <Text style={styles.container}>AAAAAsaskjfk</Text>;

const Title = ({ title = 'aaa' }) => <Text>{title}</Text>;
export const text2 = () => <Title title="bbb" />;
export const text3 = () => <Title />;

// Propsのデフォルト値
Title.defaultProps = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
