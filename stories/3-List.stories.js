import React from 'react';
import { MyFlatList } from './component/MyFlatList';

export default {
    title: 'List'
};

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'あああ'
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

export const story1 = ({ data = DATA }) => <MyFlatList data={data} />;
