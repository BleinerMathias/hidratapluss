import { NavigationContainer } from "@react-navigation/native"
import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { AppStack } from "./AppStack";
export function Router(){
    return(
        <NavigationContainer>        
         <AppStack/>
        </NavigationContainer>
    )

}