import React, { useEffect, useState } from 'react';
import { useRootStore } from '../hooks/useRootStore';
import { observer } from "mobx-react";
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native';

export const FixerScreen = observer(({ navigation }) => {

    const { _, fixerStore } = useRootStore();

    // useEffect(() => {
    //     fixerStore.getTodosFromService()
    // }, [])

    useEffect(() => {
        fixerStore.getData()
    }, [])

    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <SafeAreaView style={styles.container}>
            {fixerStore.fixerData && !fixerStore.isLoading ? (
                <View style={styles.content}>
                    <Text>Основная валюта {fixerStore.fixerData.base}</Text>
                    <Text>На {fixerStore.fixerData.date}</Text>
                    <Text>Курсы валют:</Text>
                    <FlatList
                        data={fixerStore.getRatesList()}
                        keyExtractor={(item, index) => keyExtractor(index)}
                        renderItem={({ item, index }) =>
                            <Text style={{ flex: 3 }}>{item}</Text>
                        }
                    />
                </View>
            ) : (<ActivityIndicator style={styles.loader} />)}
        </SafeAreaView>
    );
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 16
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});