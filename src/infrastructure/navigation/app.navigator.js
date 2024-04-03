import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import DashBoardNavigator from "./DashBoard.navigator";
import ChatNavigator from "./Chat.navigator";
//import SettingsScreen from "../../features/settings/screens/SettingsScreen";

import CheckoutNavigator from "./Checkout.navigator";
import CalendarNavigator from "./Calendar.navigator";

import { theme } from "../theme";

import ChatIcon from "../../features/Chat/screen/ChatIcon";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  DashBoard: "fitness", //"md-restaurant",
  Chat: "chatbubble-outline",
  Checkout: "md-cart",
  Workout: "dumbbell",
  Calendar: "calendar-outline",
  //Settings: "md-settings",
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
          let iconValue = (
            <Ionicons name={iconName} size={size} color={color} />
          );
          if (iconName === "dumbbell")
            iconValue = (
              <FontAwesome5 name="dumbbell" size={size} color={color} />
            );
          return iconValue;
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
      <Tab.Screen
        name="Calendar"
        component={CalendarNavigator}
        options={{
          // tabBarLabel: "Chats",
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="Workout"
        component={WorkoutNavigator}
        options={{
          headerShown: false,
          //headerTitle: "",
        }}
      /> */}
      <Tab.Screen name="Checkout" component={CheckoutNavigator} />
      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          // tabBarLabel: "Chats",
          headerShown: false,
        }}
      />
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
