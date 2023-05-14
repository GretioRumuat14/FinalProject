import React from "react";
import  { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from "./src/pages";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Group>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default StackNavigator;