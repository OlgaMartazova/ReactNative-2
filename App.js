import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { TodoListScreen } from "./screens/TodoListScreen";
import { CompletedListScreen } from "./screens/CompletedListScreen";
import React, { useEffect, useState } from 'react';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Todo'} component={TodoListScreen} />
        <Stack.Screen name={'Completed'} component={CompletedListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
