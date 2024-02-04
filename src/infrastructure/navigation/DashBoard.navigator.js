import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
//import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";
import BodyWeightDetail from "../../features/dashBoard/component/linear-chart/bodyWeightDetail";
import { DashBoardScreen } from "../../features/dashBoard/screens/dashBoard-screen";
import { GalleryScreen } from "../../features/photoGallery/screen/gallery-screen";

const DashBoardStack = createStackNavigator();

export const DashBoardNavigator = () => {
  return (
    <DashBoardStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <DashBoardStack.Screen name="DashBoard" component={DashBoardScreen} />
      <DashBoardStack.Screen
        name="bodyWeightDetail"
        component={BodyWeightDetail}
      />
      <DashBoardStack.Screen name="GalleryScreen" component={GalleryScreen} />
    </DashBoardStack.Navigator>
  );
};
