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
import Detail_user from "../screens/user/Detail_user";
import MapScreen from "../screens/user/MapScreen";
import Event_user from "../screens/user/Events_user";
import Myevents from "../screens/user/Myevents";
import Myaddedevents from "../screens/user/Myaddedevents";
import Reservation_user from "../screens/user/Reservation_user";
import Myaddedreservations from "../screens/user/Myaddedreservations";

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
            <Stack.Screen name="Detail_user" component={Detail_user}/>
            <Stack.Screen name="Nearby" component={MapScreen}/>
            <Stack.Screen name="Event_user" component={Event_user}/>
            <Stack.Screen name="Myevents" component={Myevents}/>
            <Stack.Screen name="Myaddedevents" component={Myaddedevents}/>
            <Stack.Screen name="Reservation_user" component={Reservation_user}/>
            <Stack.Screen name="Myaddedreservations" component={Myaddedreservations}/>
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;