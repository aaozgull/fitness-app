import React, { useState } from "react";
import { StatusBar, SafeAreaView, ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";
import { WorkoutInfoCard } from "../components/WorkoutInfoCard";
import SubmitButton from "../../../components/utility/SubmitButton";
import { addToCart } from "../../../store/cartSlice";

const WorkoutDetailScreen = ({ route }) => {
  const { workout } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
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
  return (
    <SafeAreaView style={styles.safeArea}>
      <WorkoutInfoCard workout={workout} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <Divider />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <Divider />
          <List.Item title="Steak Sandwich" />
          <Divider />
          <List.Item title="Mushroom Soup" />
          <Divider />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <Divider />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <Divider />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <Divider />

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <Divider />
          <List.Item title="Tea" />
          <Divider />
          <List.Item title="Modelo" />
          <Divider />
          <List.Item title="Coke" />
          <Divider />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
      <View style={{ marginTop: 16 }}>
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
    </SafeAreaView>
  );
};

export default WorkoutDetailScreen;
const styles = StyleSheet.create({
  loadingContainer: {
    position: absolute,
    top: "50%",
    left: "50%",
  },
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: colors.bg.primary,
  },
  spaceBottom: {
    marginBottom: 16,
  },
});
