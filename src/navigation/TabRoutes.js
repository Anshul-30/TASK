import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import navigationString from "./navigationString";
import MainStack from "./MainStack";
import { ProfileStack } from "./ProfileStack";
import { Image } from "react-native";
import { imagePath } from "../constatnts/imagepath";
import colors from "../styles/colors";
const Tab = createBottomTabNavigator();
export const TabRoutes=()=> {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name={navigationString.MAIN}
        component={MainStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image style={{tintColor:colors.redB}} source={imagePath.ic_home} />
            ) : (
              <Image source={imagePath.ic_home} />
            );
          },
          tabBarStyle: {
            backgroundColor: "rgba(76,76,76,1)",
            height: 60,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      />
      <Tab.Screen
        name={navigationString.PROFILESTACK}
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image style={{ tintColor: "red" }} source={imagePath.ic_user} />
            ) : (
              <Image source={imagePath.ic_user} />
            );
          },
          tabBarStyle: {
            backgroundColor: "rgba(76,76,76,1)",
            height: 60,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      />
    </Tab.Navigator>

  );
}