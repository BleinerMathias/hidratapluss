import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import HomeScreen from "../screens/HomeScreen";
import WaterCalculatorScreen from "../screens/WaterCalculatorScreen";
import LogWaterScreen from "../screens/LogWaterScreen";

const Stack = createNativeStackNavigator();

export function AppStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="WaterCalculator" component={WaterCalculatorScreen} options={{headerShown: false}} />
            <Stack.Screen name="LogWater" component={LogWaterScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}