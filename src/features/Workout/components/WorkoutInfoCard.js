import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Favourite } from "../../../components/favourites/favourite.component";

const WorkoutInfoCard = ({ workout = {} }) => {
  const {
    name = "Some workout",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    duration = "4 week | 6 days | 3 days",
    categoryId,
  } = workout;

  return (
    <Card elevation={5}>
      <View>
        <Favourite workout={workout} />
        <Card.Cover key={name} source={{ uri: photos[0] }} />
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>{name}</Text>

        <View style={styles.duration}>{duration}</View>
      </View>
    </Card>
  );
};
export default WorkoutInfoCard;
const styles = StyleSheet.create({
  info: {
    padding: 16,
  },
  label: {
    fontFamily: "regular",
  },
  duration: {
    fontFamily: "bold",
  },
});
