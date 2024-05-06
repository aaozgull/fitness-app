import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CalendarScreen from "../../features/Calendar/screen/Calendar-screen";
import WorkoutNavigator from "./Workout.navigator";
import RecipesNavigator from "./recipes.navigator";

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
      <Stack.Screen name="Recipes" component={RecipesNavigator} />
    </Stack.Navigator>
  );
};

export default CalendarNavigator;
