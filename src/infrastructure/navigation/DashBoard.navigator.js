import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
//import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";
import BodyWeightDetail from "../../features/dashBoard/component/linear-chart/bodyWeightDetail";
import { DashBoardScreen } from "../../features/dashBoard/screens/dashBoard-screen";

const DashBoardStack = createStackNavigator();

export const DashBoardNavigator = () => {
  return (
    <DashBoardStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <DashBoardStack.Screen name="DashBoard" component={DashBoardScreen} />
      <DashBoardStack.Screen
        name="bodyWeightDetail"
        component={BodyWeightDetail} /* {() => {
          <Text>Restaurant Details</Text>;
        }} */
      />
    </DashBoardStack.Navigator>
  );
};
