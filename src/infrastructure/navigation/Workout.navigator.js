import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExerciseDetailScreen from "../../features/Workout/screens/ExerciseDetailScreen";

import WorkoutScreen from "../../features/Workout/screens/WorkoutScreen";
import ExercisesScreen from "../../features/Workout/screens/ExercisesScreen";
import ChatScreen from "../../features/Chat/screen/ChatScreen";

//import TimerScreen from "../../../";

const WorkoutStack = createNativeStackNavigator();

const WorkoutNavigator = () => {
  return (
    <WorkoutStack.Navigator headerMode="none">
      <WorkoutStack.Screen name="WorkoutScreen" component={WorkoutScreen} />
      <WorkoutStack.Screen name="Exercises" component={ExercisesScreen} />
      <WorkoutStack.Screen name="Chat" component={ChatScreen} />

      <WorkoutStack.Screen
        name="ExerciseDetail"
        component={ExerciseDetailScreen}
      />
    </WorkoutStack.Navigator>
  );
};

export default WorkoutNavigator;
