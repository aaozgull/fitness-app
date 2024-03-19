import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
///import { ActivityIndicator, Alert } from "react-native";

import { theme } from "../../../infrastructure/theme";
import PageTitle from "../../../components/utility/PageTitle";
import PageContainer from "../../../components/utility/PageContainer";
import HeaderLogo from "../../../components/utility/HeaderLogo";
import ImageSlider from "../../../components/workout/ImageSlider";
import { bodyParts } from "../../../constants/index";
import DataItem from "../../../components/utility/DataItem";
import { colors } from "../../../infrastructure/theme/colors";

//might be change this file name. as it is only for order workoutPlan

const WorkoutScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  // console.log(bodyParts);
  const workoutPlanHandler = () => {
    try {
      setIsLoading(true);
      dispatch(
        addToCart(
          { item: "workout category", price: 1299 },
          { workout: "workout object" }
        )
      ); //  this need to work
      navigation.navigate("checkoutScreen");
    } catch (error) {
      //setError(error.message);
      setIsLoading(false);
    }
  };
  const handleItemPress = (item) => {
    /// setSelectedItem(item);
    //setMenuVisible(true);
    navigation.navigate("Exercises", { item: item });
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <HeaderLogo
          style={
            {
              // marginLeft: 50,
              // marginTop: StatusBar.currentHeight,
            }
          }
        />
      ),
    });
  }, []);

  return (
    <PageContainer style={styles.container}>
      {/*  <View style={styles.calendarContainer}>*/}
      <PageTitle
        title="Workouts"
        style={styles.pageTitle}
        textStyle={styles.pageTitleColor}
      />
      {/*  <View style={styles.divider}></View> */}
      <View style={styles.ImageContainer}>
        <ImageSlider />
      </View>
      <View style={styles.bodyPartsContainer}>
        <PageTitle text="Boby Part" textStyle={{ color: "red" }} />
        <FlatList
          data={bodyParts}
          renderItem={({ item }) => {
            console.log(item.image);
            return (
              <DataItem
                type={"workout"}
                size={80}
                title={item.name}
                image={item.image}
                onPress={() => handleItemPress(item)}
              />
            );
          }}
          keyExtractor={(item, index) => item.name + index}
        />
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 10,
    backgroundColor: theme.colors.ui.primary,
  },

  bodyPartsContainer: {
    flex: 1,
    marginHorizontal: 20,
    // backgroundColor: "green",
    //marginTop: 20,
  },
  ImageContainer: {
    flex: 1,
    // marginHorizontal: 20,
    backgroundColor: colors.ui.quaternary,
    //marginTop: 20,
  },
  pageTitle: {
    backgroundColor: theme.colors.ui.quaternary,
    padding: 20,
  },
  pageTitleColor: {
    color: theme.colors.text.fiftary,
  },
  divider: {
    backgroundColor: theme.colors.ui.accent2,
    padding: 8,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    elevation: 3,
    shadowColor: theme.colors.ui.quaternary, // "#39324a", // GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal: 2,

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
  subValue: {
    textTransform: "capitalize",
  },
});

export default WorkoutScreen;
