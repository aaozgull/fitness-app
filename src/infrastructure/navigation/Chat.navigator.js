import React from "react";
import ChatListScreen from "../../features/Chat/screen/ChatListScreen";
import ChatScreen from "../../features/Chat/screen/ChatScreen";
//import ChatListScreen from "../../features/Chat/screen/ChatListScreen";
import NewChatScreen from "../../features/Chat/screen/NewChatScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ChatStack = createNativeStackNavigator();

export const ChatNavigator = () => {
  return (
    <ChatStack.Navigator>
      <Stack.Group>
        <Tab.Screen
          name="ChatList"
          component={ChatListScreen}
          options={{
            tabBarLabel: "Chats",
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            headerTitle: "",
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="ChatSettings"
          component={ChatSettingsScreen}
          options={{
            headerTitle: "Settings",
            headerBackTitle: "Back",
          }}
        />
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: "containedModal" }}>
        <Stack.Screen name="NewChat" component={NewChatScreen} />
      </Stack.Group>
    </ChatStack.Navigator>
  );
};
