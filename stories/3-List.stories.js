import React from 'react';
import { MyFlatList } from './component/MyFlatList';
import { StyleSheet } from 'react-native';

export default {
    title: 'List'
};

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'ああu'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'いいいい'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'うううう'
    }
];

export const story1 = ({ data = DATA, styleItem = styles.item }) => (
    <MyFlatList data={data} />
);
export const story2 = ({ data = DATA, styleItem = styles.item }) => (
    <MyFlatList data={data} styleItem={styleItem} />
);

story1.story = { name: '本体' };
story2.story = { name: '黄色' };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 44
    },
    item: {
        backgroundColor: '#fff111',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 32
    }
});
