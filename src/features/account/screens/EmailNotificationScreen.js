import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import PageContainer from "../../../components/utility/PageContainer";
import PageTitle from "../../../components/utility/PageTitle";
import SubmitButton from "../../../components/utility/SubmitButton";
import { colors } from "../../../infrastructure/theme/colors";
import { createCalendar } from "../../../utils/actions/calendarActions";
import { setIsNewRegistration } from "../../../store/authSlice";

const EmailNotificationScreen = (props) => {
  function continueHandler() {}
  return (
    <PageContainer style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name="mail-open" size={54} color="white" />
      </View>

      {/* <MaterialCommunityIcons
        name="lightbulb-on-outline"
        size={24}
        color="black"
      />
      <MaterialCommunityIcons name="email-newsletter" size={24} color="black" />
      <MaterialCommunityIcons name="lightbulb-on" size={24} color="black" />
       */}
      <View style={styles.icon}>
        <MaterialCommunityIcons name="lightbulb-on" size={54} color="white" />
      </View>
      <PageTitle text="Turn off email notifications" />
      <Text style={styles.text}>
        This app will gently remind you of daily things to do and check-in at
        the end of the day to see if you've completed any habit.{" "}
      </Text>
      <View style={styles.buttonContainer}>
        <SubmitButton
          title="TURN OFF EMAILS"
          onPress={continueHandler}
          style={{ marginTop: 20 }}
          color={colors.ui.accent}
        />
        <SubmitButton
          title="Skip This For Now"
          onPress={() => navigation.navigate("SetupCalendar")}
          style={{ marginTop: 20 }}
          color={colors.bg.primary}
          textColor={colors.ui.accent2}
        />
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    marginTop: 150,
  },

  icon: {
    marginTop: 100,
    borderRadius: 50,
    borderColor: colors.ui.accent2,
    borderWidth: 15,
    backgroundColor: colors.ui.accent2,
  },
  text: {
    fontFamily: "bold",
    fontSize: 22,
    letterSpacing: 0.5,
    color: colors.text.primary,
  },
  buttonContainer: {
    marginBottom: 20,
    flex: 1,
    width: "90%",
    justifyContent: "flex-end",
  },
});

export default EmailNotificationScreen;
