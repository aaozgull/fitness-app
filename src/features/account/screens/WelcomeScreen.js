import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import { FadeInDown } from "react-native-reanimated";
import WelcomeImageSlider from "../components/WelcomeImageSlider";

import { colors } from "../../../infrastructure/theme/colors";
import SubmitButton from "../../../components/utility/SubmitButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["transparent", "transparent"]}
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        paddingBottom: 20,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Auth", { isNewRegisteration: false })
        }
        style={styles.linkContainer}
      >
        <Text style={styles.link}>Log in</Text>
      </TouchableOpacity>
      <WelcomeImageSlider />
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          //  style={{ alignItems: "center" }}
        >
          <SubmitButton
            title="  SIGN UP WITH EMAIL  "
            onPress={() =>
              navigation.navigate("Auth", { isNewRegisteration: true })
            }
            style={{ marginHorizontal: 15 }}
            color={colors.ui.accent}
          />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <SubmitButton
            title="SIGN UP WITH GOOGLE"
            onPress={() => null}
            style={{ marginHorizontal: 15, marginVertical: 15 }}
            color={colors.ui.tertiary}
          />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(300).springify()}>
          <Text style={styles.termText}>
            By Signing up you agree for ours{" "}
            <Text
              style={{ ...styles.termText, textDecorationLine: "underline" }}
            >
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text
              style={{ ...styles.termText, textDecorationLine: "underline" }}
            >
              Privacy Policy
            </Text>
          </Text>
        </Animated.View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  ImageContainer: {
    flex: 1,
    // marginHorizontal: 20,

    backgroundColor: colors.ui.quaternary,
    //marginTop: 20,
    //backgroundColor: theme.colors.ui.accent2,
    //padding: 8,
    borderTopStartRadius: 200,

    borderBottomStartRadius: 200,
    elevation: 3,
    shadowColor: colors.ui.quaternary, // "#39324a", // GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  termText: {
    fontSize: 14,
    fontFamily: "regular",
    color: colors.ui.gray700,
    //fontWeight: "bold",
    letterSpacing: 1,
    paddingHorizontal: 20,
  },
  linkContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginVertical: 35,
    marginHorizontal: 35,
  },
  link: {
    color: colors.text.primary,
    fontFamily: "regular",
    fontSize: 20,
    letterSpacing: 0.3,
    marginTop: 15,
  },
});
