import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <Button
                onPress={() => navigation.navigate('Todo')}
                title='Todo list' />
            <Button
                onPress={() => navigation.navigate('Fixer')}
                title='Get data from external storage' />
        </View>
    );
}