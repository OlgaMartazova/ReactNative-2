import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { TodoLine } from '../components/TodoLine';
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { useRootStore } from '../hooks/useRootStore';
import { observer } from "mobx-react";


export const TodoListScreen = observer(({ navigation }) => {

    const [text, setText] = useState('');
    const { todoStore } = useRootStore();

    useEffect(() => {
        todoStore.getTodosFromService()
    }, [])

    const addTodo = () => {
        todoStore.addTodo(text)
        setText('')
    }

    const deleteTodo = index => {
        todoStore.deleteTodo(index)
    }

    const deleteAllTodos = () => {
        todoStore.deleteAllTodos()
    }

    const completeTodo = (index) => {
        todoStore.completeTodo(index)
    }

    const checkTextInput = () => {
        if (text.length != 0) {
            addTodo()
        }
    }

    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <SafeAreaView style={styles.container}>
            {todoStore.todoList && !todoStore.isLoading ? (
                <View style={styles.content}>
                    <Button title='Завершенные задачи' onPress={() => navigation.navigate('Completed')} />
                    <View style={styles.deleteAll}>
                        <Text style={{ padding: 12 }}>New tasks:</Text>
                        <Button title="Delete all" onPress={deleteAllTodos}></Button>
                    </View>
                    <FlatList
                        data={todoStore.todoList}
                        keyExtractor={(item, index) => keyExtractor(index)}
                        renderItem={({ item, index }) =>
                            <TodoLine
                                item={item}
                                index={index}
                                completeTodo={completeTodo}
                                deleteTodo={deleteTodo}
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
    }
});