import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import { useRootStore } from '../hooks/useRootStore';
import { observer } from 'mobx-react';

export const LogScreen = observer(() => {

    const { logStore } = useRootStore();

    useEffect(() => {
        logStore.getLogs()
    }, [])

    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <SafeAreaView style={styles.container}>
            {logStore.logData && !logStore.isLoading ? (
                <View style={styles.content}>
                    <Button
                        onPress={() => logStore.removeLogs()}
                        title='Clear' />
                    <FlatList
                        data={logStore.logData}
                        keyExtractor={(item, index) => keyExtractor(index)}
                        renderItem={({ item, index }) =>
                            <View style={styles.todoLine}>
                                <TouchableOpacity style={styles.todoLineTouch}>
                                    <Text style={{ flex: 3 }}>{item.text} в {item.timestamp}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </View>
            ) : (<ActivityIndicator style={styles.loader} />)}
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 16
    },
    todoLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    todoLineTouch: {
        paddingTop: 16,
    },
    textInput: {
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        marginBottom: 16
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});