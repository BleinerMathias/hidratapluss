// navigation/Navigation.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import WaterCalculatorScreen from '../screens/WaterCalculatorScreen';

const Stack = createNativeStackNavigator();

export function Navigation(){
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="WaterCalculator" component={WaterCalculatorScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
};

