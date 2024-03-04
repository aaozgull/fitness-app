import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WorkoutDetailScreen } from "../../features/Workout/screens/WorkoutDetailScreen";

import { WorkoutScreen } from "../../features/Workout/screens/WorkoutScreen";

const WorkoutStack = createNativeStackNavigator();

const WorkoutNavigator = () => {
  return (
    <WorkoutStack.Navigator headerMode="none">
      <WorkoutStack.Screen name="Workout" component={WorkoutScreen} />
      <WorkoutStack.Screen
        name="WorkoutDetail"
        component={WorkoutDetailScreen}
      />
    </WorkoutStack.Navigator>
  );
};

export default WorkoutNavigator;
