import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { TodoListScreen } from "./screens/TodoListScreen";
import { CompletedListScreen } from "./screens/CompletedListScreen";
import React, { useEffect, useState } from 'react';
import { FixerScreen } from "./screens/FixerScreen";
import { LogScreen } from "./screens/LogScreen";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Home'} component={HomeScreen} />
          <Stack.Screen name={'Todo'} component={TodoListScreen} />
          <Stack.Screen name={'Fixer'} component={FixerScreen} />
          <Stack.Screen name={'Completed'} component={CompletedListScreen} />
          <Stack.Screen name={'Logs'} component={LogScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
