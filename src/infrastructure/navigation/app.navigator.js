import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import DashBoardNavigator from "./DashBoard.navigator";
import { ChatNavigator } from "./Chat.navigator";
import SettingsScreen from "../../features/settings/screens/SettingsScreen";
import { CheckoutNavigator } from "./checkout.navigator";

import { theme } from "../theme";
import CalendarScreen from "../../features/Calendar/screen/Calendar-screen";

import ChatIcon from "../../features/Chat/screen/ChatIcon";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  DashBoard: "fitness", //"md-restaurant",
  Chat: "chatbubble-outline",
  Checkout: "md-cart",
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
        headerTitle: "",
        headerShadowVisible: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontFamily: "mediumItalic",
          letterSpacing: 0.3,
          fontSize: 16,
          paddingBottom: 10,
        },
        //headerShown: false,

        tabBarStyle: {
          height: 70,
        },
        tabBarIcon: ({ size, color }) => {
          const iconName = TAB_ICON[route.name];
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="DashBoard"
        component={DashBoardNavigator}
        options={{
          headerShown: false,
          //headerTitle: "",
        }}
      />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Checkout" component={CheckoutNavigator} />
      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          tabBarLabel: "Chats",
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    {/*  <ChatIcon /> */}
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
  },
});
