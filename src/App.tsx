import React from "react";
import { View } from "react-native";
import { SplashScreen, HomeScreen } from "./pages";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigator from "../StackNavigator";

const App = () => {
  return (
    // <NavigationContainer>
    //   <StackNavigator 
    //   />
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen 
    //       name="SplashScreen"
    //       component={SplashScreen}
    //     />
    //     {/* <Stack.Screen
    //       name="Home"
    //       component={Home}
    //     /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>

    <View style={{flex: 1, backgroundColor: 'black'}}>
      {/* <SplashScreen/> */}
      <HomeScreen />
    </View>
  )
}

export default App;