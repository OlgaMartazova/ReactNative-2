import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { CompletedTodoLine } from './CompletedTodoLine';

export const CompletedListModal = (props) => {

    const keyExtractor = (index) => {
        return index.toString();
    };

    const renderItem = ({ item }) => (
        <CompletedTodoLine item={item} />
    );

    return (
        <Modalize
            ref={props.modalizeRef}
            modalTopOffset={200}
            statusBarTranslucent={true}
            childrenStyle={{ padding: 20 }}
            flatListProps={{
                data: props.completedTodos,
                renderItem: renderItem,
                keyExtractor: (item, index) => keyExtractor(index),
                showsVerticalScrollIndicator: false,
            }}
        />
    )
}

const styles = StyleSheet.create({
    todoLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'green',
    },
    todoLineTouch: {
        paddingTop: 16,
    }
});