import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { TodoLine } from '../components/TodoLine';
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { useRootStore } from '../hooks/useRootStore';
import { observer } from "mobx-react";
import { Alert } from 'react-native';
import { CompletedListModal } from '../components/CompletedListModal';


export const TodoListScreen = observer(({ navigation }) => {

    const [text, setText] = useState('');
    const { todoStore, _, logStore } = useRootStore();

    useEffect(() => {
        todoStore.getTodosFromService()
    }, [])

    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const addTodo = () => {
        todoStore.addTodo(text)
        logStore.addLog(`Добавлена задача: ${text}`)
        setText('')
    }

    const deleteTodo = index => {
        todoStore.deleteTodo(index)
        logStore.addLog(`Удалена задача по индексу: ${index}`)
    }

    const deleteAllTodos = () => {
        todoStore.deleteAllTodos()
        logStore.addLog("Удалены все задачи")
    }

    const completeTodo = (index) => {
        logStore.addLog(`Выполнена задача по индексу: ${index}`)
        todoStore.completeTodo(index)
    }

    const checkTextInput = () => {
        if (text.length != 0) {
            addTodo()
        }
    }

    const deleteAllAlert = () => {
        Alert.alert('Delete all??', 'Are you sure???', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'), style: 'cancel',
            },
            { text: 'OK', onPress: () => deleteAllTodos() },
        ]);
    }

    const deleteItemAlert = (index) => {
        Alert.alert('Delete item??', 'Why?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'), style: 'cancel',
            },
            { text: 'OK', onPress: () => deleteTodo(index) },
        ]);
    }

    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <SafeAreaView style={styles.container}>
            {!todoStore.isLoading ? (
                <View style={styles.content}>
                    <View style={styles.content}>
                        {/* <Button title='Завершенные задачи' onPress={() => navigation.navigate('Completed')} /> */}
                        <Button title='Завершенные задачи' onPress={onOpen} />
                        <View style={styles.deleteAll}>
                            <Text style={{ padding: 12 }}>New tasks:</Text>
                            <Button title="Delete all" onPress={deleteAllAlert}></Button>
                        </View>
                        <FlatList
                            data={todoStore.todoList}
                            keyExtractor={(item, index) => keyExtractor(index)}
                            renderItem={({ item, index }) =>
                                <TodoLine
                                    item={item}
                                    index={index}
                                    completeTodo={completeTodo}
                                    deleteTodo={deleteItemAlert}
                                />}
                        />
                        <TextInput style={styles.textInput}
                            onChangeText={newText => setText(newText)}
                            onSubmitEditing={checkTextInput}
                            value={text}
                        ></TextInput>
                        <Button title="ADD" onPress={checkTextInput}></Button>
                        <StatusBar style="auto" />
                    </View>
                    <CompletedListModal modalizeRef={modalizeRef} completedTodos={todoStore.getCompletedTodos()} />
                </View>
            ) : (
                <ActivityIndicator style={styles.loader} />)
            }
        </SafeAreaView>
    )
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
    deleteAll: {
        flexDirection: 'row',
        alignItems: 'Top',
        justifyContent: 'space-between',
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
    },
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