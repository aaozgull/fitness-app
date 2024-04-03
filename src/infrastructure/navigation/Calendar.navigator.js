import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CalendarScreen from "../../features/Calendar/screen/Calendar-screen";
import WorkoutNavigator from "./Workout.navigator";

const Stack = createNativeStackNavigator();

const CalendarNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen
        name="Workout"
        component={WorkoutNavigator}
        options={{
          headerShown: false,
          //headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default CalendarNavigator;
