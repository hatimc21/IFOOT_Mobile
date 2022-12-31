import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/pitch_owner/Home";
import Detail from "../screens/pitch_owner/Detail";
import ADD_Pitch from "../screens/pitch_owner/ADD_Pitch";
import LoginPage from "../screens/LoginPage";
import SplashScreen from "../screens/SplashScreen"
import { StackActions } from "@react-navigation/native";
import Register from "../screens/Register";
import Home_user from "../screens/user/Home_user";

const Stack = createStackNavigator();
const ScreenOptionStyle = {
    headerShown: true,
};
const HomeStackNavigator = () =>{
    return (
        <Stack.Navigator screenOptions={ScreenOptionStyle}>
            <Stack.Screen name="Login" component={LoginPage}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="ADD_Pitch" component={ADD_Pitch}/>
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="Home_user" component={Home_user}/>
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;