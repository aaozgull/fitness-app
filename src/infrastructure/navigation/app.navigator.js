import React from "react";
import { SafeAreaView, StatusBar, View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { DashBoardNavigator } from "../navigation/DashBoard.navigator";
//import { SettingsNavigator } from "./settings.navigator";
import ProfileScreen from "../../features/settings/screens/profile.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { theme } from "../theme";
import CalendarScreen from "../../features/Calendar/screen/Calendar-screen";
import ChatIcon from "../../features/Chat/screen/ChatIcon";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  DashBoardNavigator: "md-restaurant",
  // Chat: "chatbox-outline",
  Calendar: "calendar-outline",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
export const AppNavigator = () => (
  <>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.ui.tertiary,
        tabBarInactiveTintColor: theme.colors.ui.gray500,
        headerShown: false,
        tabBarIcon: ({ size, color }) => {
          const iconName = TAB_ICON[route.name];
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="DashBoardNavigator" component={DashBoardNavigator} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Settings" component={ProfileScreen} />
    </Tab.Navigator>
    <ChatIcon />
  </>
);
