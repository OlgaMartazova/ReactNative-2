import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export const CompletedTodoLine = (props) => {
    return (
        <View style={styles.todoLine}>
            <TouchableOpacity style={styles.todoLineTouch}>
                <Text style={{ flex: 3 }}>{props.item.text}</Text>
            </TouchableOpacity>
        </View>
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
    },
})