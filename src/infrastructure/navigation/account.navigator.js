import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen"; */

import GoalScreen from "../../features/account/screens/GoalScreen";
import EquipmentScreen from "../../features/account/screens/EquipmentScreen";
import FitnessLevelScreen from "../../features/account/screens/FitnessLevelScreen";

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Goal" component={GoalScreen} />
    <Stack.Screen name="FitnessLevel" component={FitnessLevelScreen} />
    <Stack.Screen name="Equipment" component={EquipmentScreen} />
  </Stack.Navigator>
);
