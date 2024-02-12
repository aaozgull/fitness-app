import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

/* import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen"; */

import GoalScreen from "../../features/account/screens/GoalScreen";
import EquipmentScreen from "../../features/account/screens/EquipmentScreen";
import FitnessLevelScreen from "../../features/account/screens/FitnessLevelScreen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Goal" component={GoalScreen} />
    <Stack.Screen name="FitnessLevel" component={FitnessLevelScreen} />
    <Stack.Screen name="Equipment" component={EquipmentScreen} />
  </Stack.Navigator>
);
