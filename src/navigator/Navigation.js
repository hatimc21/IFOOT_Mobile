import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import { StackActions } from "@react-navigation/native";

const Stack = createStackNavigator();
const ScreenOptionStyle = {
    headerShown: false,
};
const HomeStackNavigator = () =>{
    return (
        <Stack.Navigator screenOptions={ScreenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;