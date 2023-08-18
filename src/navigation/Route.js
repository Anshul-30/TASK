import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import HomeStack from "./HomeStack";
import { useSelector } from "react-redux";
import userState from "../redux/reducer/ContinueLogin";

const Stack = createStackNavigator();

export default function route() {
    const userStatus = useSelector(state => state.userState.userdata);
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {userStatus  ? HomeStack(Stack) : AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}