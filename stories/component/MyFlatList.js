import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item'
    }
];

const Item = ({
    title = '???',
    styleItem = styles.item,
    styleTitle = styles.title
}) => {
    return (
        <View style={styleItem}>
            <Text style={styleTitle}>{title}</Text>
        </View>
    );
};
export const MyFlatList = ({ data = DATA, styleItem, styleTitle }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <Item
                    title={item.title}
                    styleItem={styleItem}
                    styleTitle={styleTitle}
                />
            )}
            keyExtractor={item => item.id}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 44
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 32
    }
});
