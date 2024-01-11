import React from "react";
import { SafeAreaView, StatusBar, View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { DashBoardNavigator } from "../navigation/DashBoard.navigator";
import { theme } from "../theme";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  DashBoardNavigator: "md-restaurant",
  Chat: "chatbox-outline",
  Settings: "md-settings",
};

const Settings = () => (
  <SafeAreaView style={styles.container}>
    <Text>Settings</Text>
  </SafeAreaView>
);
const Chat = () => (
  <SafeAreaView style={styles.container}>
    <Text>Chat</Text>
  </SafeAreaView>
);

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
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="DashBoardNavigator" component={DashBoardNavigator} />
    <Tab.Screen name="Chat" component={Chat} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: theme.colors.bg.primary, //"#2d0689",
  },
});
