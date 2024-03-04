import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import { ActivityIndicator, Alert } from "react-native";
import { useDispatch } from "react-redux";

import { theme } from "../../../infrastructure/theme";
import PageTitle from "../../../components/utility/PageTitle";
import { getFormattedDate } from "../../../utils/date";
import PageContainer from "../../../components/utility/PageContainer";
import HeaderLogo from "../../../components/utility/HeaderLogo";
import SubmitButton from "../../../components/utility/SubmitButton";
import { addToCart } from "../../../store/cartSlice";

//might be change this file name. as it is only for order workoutPlan

const WorkoutScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
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
    setSelectedItem(item);
    setMenuVisible(true);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  const handleSelectMenuItem = (menuItem) => {
    console.log(`Pressed ${menuItem.text}`); // Access the text property of the selected item
    setMenuVisible(false);
    setSelectedMenuItem(menuItem);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <HeaderLogo
          style={{
            marginLeft: 150,
            marginTop: StatusBar.currentHeight,
          }}
        />
      ),
    });
  }, []);

  return (
    <PageContainer style={styles.container}>
      {/*  <View style={styles.calendarContainer}> */}
      <PageTitle
        title="Workouts"
        style={styles.pageTitle}
        textStyle={styles.pageTitleColor}
      />
      <View style={styles.divider}></View>
      <FlatList
        data={dates}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <Text>item</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item}
      />
      <View>
        {isLoading ? (
          <ActivityIndicator
            size={"small"}
            color={colors.ui.accent2}
            style={{ marginTop: 10 }}
          />
        ) : (
          //add icone cash-usd
          <SubmitButton
            title="order workout plan"
            onPress={workoutPlanHandler}
            style={{ marginTop: 20 }}
          />
        )}
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: theme.colors.ui.primary,
  },

  calendarContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  pageTitle: {
    backgroundColor: theme.colors.ui.quaternary,
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
});

export default WorkoutScreen;
