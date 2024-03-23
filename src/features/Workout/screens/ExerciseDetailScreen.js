import React, { useState, useEffect } from "react";
import {
  StatusBar,
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { List, Divider } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";
import { Audio } from "expo-av";
import Anticons from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { colors } from "../../../infrastructure/theme/colors";
//import { ExerciseInfoCard } from "../components/ExerciseInfoCard";
import SubmitButton from "../../../components/utility/SubmitButton";
import { addToCart, selectCart } from "../../../store/cartSlice";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../../components/utility/CustomHeaderButton";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
const countDownAudio = require("../../../../assets/audio/countdownaudio.mp3");

const ExerciseDetailScreen = ({ navigation, route }) => {
  const { exercise } = route.params;
  const [instructionExpanded, setInstructionExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);
  //////// timer////

  const initialTime = 5;
  const minTime = 5;

  const [gifUrl, setGifUrl] = useState(null);
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [countDownSound, setCountDownSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(countDownAudio);
    setCountDownSound(sound);
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        setIsAudioPlaying(false);
      }
    });
    await sound.playAsync();
    setIsAudioPlaying(true);
  }

  /*  const fetchGifUrl = async () => {
    try {
      const storageRef = ref(storage, `AllExercises/${item.gif_url}`);
      const url = await getDownloadURL(storageRef);
      setGifUrl(url);
    } catch (error) {
      console.log("error = ", error);
    }
  };

  useEffect(() => {
    fetchGifUrl();
  }, []); */

  const handleDecreaseTime = () => {
    if (!isRunning && time > minTime) {
      setTime((prevTime) => prevTime - 10);
    }
  };
  const handleIncreaseTime = () => {
    if (!isRunning) {
      setTime((prevTime) => prevTime + 10);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsFirstTime(true);
    setTime(initialTime);

    if (countDownSound && isAudioPlaying) {
      countDownSound.stopAsync();
      setIsAudioPlaying(false);
    }
  };

  useEffect(() => {
    let countDownInterval;
    // console.log("inside time decrease useeffect ");
    if (isRunning && time > 0) {
      countDownInterval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);

        if (time === 4) {
          // console.log("time is 4");
          playSound();
        }
      }, 1000);
    } else {
      setIsRunning(false);
      clearInterval(countDownInterval);
    }

    return () => {
      clearInterval(countDownInterval);
    };
  }, [isRunning, time]);

  const handleStart = () => {
    if (!isRunning && isFirstTime) {
      setIsFirstTime(false);
      setIsRunning(true);
    } else {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  ////////end timer//////////////

  const workoutPlanHandler = () => {
    try {
      setIsLoading(true);
      console.log("workoutPlanHandler");
      dispatch(
        addToCart({ item: "workout", price: 1299 }, { exercise: exercise })
      ); //  this need to work

      // Now you can access cartData.cartData and cartData.workout
      console.log("Current Cart Data:", cartData);

      navigation.navigate("Checkout");
    } catch (error) {
      console.log("Current Cart error:", error.message);
      setIsLoading(false);
    }
  };
  ///////add rest screen/////
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              //title="Chat settings"
              iconName="water"
              //iconType="FontAwesome6"
              color={colors.ui.accent2}
              size={34}
              onPress={() => navigation.navigate("Rest")}
            />
          </HeaderButtons>
        );
      },
    });
  }, []);

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
        <View style={styles.controllerButtonsContainer}>
          <TouchableOpacity
            onPress={handleDecreaseTime}
            style={{
              ...styles.timeControllerButton,
              backgroundColor: colors.ui.accent,
            }}
          >
            <Text style={styles.signs}>-</Text>
          </TouchableOpacity>
          <Text style={styles.timeText}>{time} secs</Text>
          <TouchableOpacity
            onPress={handleIncreaseTime}
            style={{
              ...styles.timeControllerButton,
              backgroundColor: colors.ui.accent2,
            }}
          >
            <Text style={styles.signs}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.controllerButtonsContainer}>
          <TouchableOpacity
            onPress={isRunning ? handlePause : handleStart}
            disabled={time === 0}
          >
            <Text
              style={{
                ...styles.setButtons,
                ...{
                  color: colors.ui.tertiary,
                  borderColor: colors.ui.tertiary,
                  opacity: time === 0 ? 0.5 : 1,
                },
              }}
            >
              {isRunning ? "PAUSE" : "START"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleReset}>
            <Text
              style={{
                ...styles.setButtons,
                ...{
                  color: colors.ui.gray500,
                  borderColor: colors.ui.gray500,
                },
              }}
            >
              RESET
            </Text>
          </TouchableOpacity>
        </View>

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
              dollarIcon={true}
              onPress={() => workoutPlanHandler()}
              style={{ marginTop: 120 }}
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
  timeControllerButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  controllerButtonsContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },

  setButtons: {
    //color: "gray",
    fontFamily: "medium",
    fontSize: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderRadius: 8,
    letterSpacing: 0.3,
    marginRight: 2,
    // borderColor: "gray",
  },
  timeText: {
    fontFamily: "bold",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 16,
    letterSpacing: 0.3,
  },
  signs: { color: "white", fontSize: 24 },
});
