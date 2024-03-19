import React from "react";
import { SettingsScreen } from "../../features/settings/screens/SettingsScreen";
import { ProfileInfoScreen } from "../../features/settings/screens/ProfileInfoScreen";
//import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
/* import ProfileScreen from "../../features/settings/screens/profile.screen"; */
import BMICalculation from "../../features/settings/screens/CalculationScreen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="ProfileInfo" component={ProfileInfoScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
      <SettingsStack.Screen name="BMICalculation" component={BMICalculation} />
    </SettingsStack.Navigator>
  );
};
