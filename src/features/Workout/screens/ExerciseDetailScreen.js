import React, { useState } from "react";
import {
  StatusBar,
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { List, Divider } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Anticons from "react-native-vector-icons/AntDesign";
import { colors } from "../../../infrastructure/theme/colors";
//import { ExerciseInfoCard } from "../components/ExerciseInfoCard";
import SubmitButton from "../../../components/utility/SubmitButton";
import { addToCart } from "../../../store/cartSlice";

const ExerciseDetailScreen = ({ navigation, route }) => {
  const { exercise } = route.params;
  const [instructionExpanded, setInstructionExpanded] = useState(false);
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
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: exercise.gifUrl }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.closeButton}
        >
          <Anticons
            name="closecircle"
            size={hp(4.5)}
            color={colors.ui.accent}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ marginHorizontal: 16, marginTop: 3 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Text style={styles.nameTitle}>{exercise.name}</Text>
        <Text style={styles.title}>
          Equipment <Text style={styles.subTitle}>{exercise?.equipment}</Text>
        </Text>
        <Text style={styles.title}>
          Secondary Muscles{" "}
          <Text style={styles.subTitle}>
            {" "}
            {exercise?.secondaryMuscles?.join(", ")}
          </Text>
        </Text>
        <Text style={styles.title}>
          Target <Text style={styles.subTitle}>{exercise?.target}</Text>
        </Text>

        <Text style={styles.title}>Instructions</Text>

        <List.Accordion
          title={exercise.instructions}
          left={(props) => (
            <List.Icon {...props} icon="clipboard-list-outline" />
          )}
          expanded={instructionExpanded}
          onPress={() => setInstructionExpanded(!instructionExpanded)}
        >
          {exercise.instructions.map((instruction, index) => (
            <View style={{ flex: 1 }} key={index}>
              <List.Item
                title={instruction}
                titleNumberOfLines={10} // Set the number of lines you want to display
                titleStyle={[
                  { ...styles.title },
                  { fontSize: 16, lineHeight: 24 },
                ]} // Customize the style as needed
              />
              <Divider />
            </View>
          ))}
        </List.Accordion>

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExerciseDetailScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ui.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 5,
  },
  imageContainer: {
    overflow: "hidden",
  },
  image: {
    width: wp(100),
    height: wp(60),
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  closeButton: {
    position: "absolute",
    borderRadius: hp(2),
    top: hp(2),
    right: wp(2),
  },
  title: {
    color: colors.text.primary,
    fontFamily: "bold",
    fontSize: 16,
    letterSpacing: 0.3,
    paddingTop: 10,
    textTransform: "capitalize",
  },
  subTitle: {
    fontFamily: "medium",
    color: colors.ui.gray500,
    letterSpacing: 0.3,
    paddingTop: 10,
  },
  nameTitle: {
    fontSize: hp(3.5),
    fontFamily: "black",
    fontWeight: "bold",
    color: colors.text.primary,
    paddingTop: 10,
    letterSpacing: 0.3,
    textTransform: "capitalize",
  },
});
